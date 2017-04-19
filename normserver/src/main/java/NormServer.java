// Based on example code from Pellet distribution at:
// https://github.com/stardog-union/pellet/blob/master/examples/src/main/java/org/mindswap/pellet/examples/RulesExample.java
// This example illustrates inferencing capabilities of Pellet

// Copyright (c) 2006 - 2008, Clark & Parsia, LLC. <http://www.clarkparsia.com>
// This source code is available under the terms of the Affero General Public License v3.
//
// Please see LICENSE.txt for full license terms, including the availability of proprietary exceptions.
// Questions, comments, or requests for clarification: licensing@clarkparsia.com

// package org.mindswap.pellet.examples;

import java.util.*;
import java.io.*;

import static spark.Spark.*;
import spark.Request;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.mindswap.pellet.jena.PelletReasonerFactory;

import com.hp.hpl.jena.ontology.Individual;
import com.hp.hpl.jena.ontology.ObjectProperty;
import com.hp.hpl.jena.ontology.DatatypeProperty;
import com.hp.hpl.jena.ontology.OntClass;
import com.hp.hpl.jena.ontology.OntModel;
import com.hp.hpl.jena.rdf.model.ModelFactory;
import com.hp.hpl.jena.rdf.model.Property;
import com.hp.hpl.jena.rdf.model.Resource;
import com.hp.hpl.jena.rdf.model.Literal;
import com.hp.hpl.jena.rdf.model.RDFNode;
import com.hp.hpl.jena.util.iterator.ExtendedIterator;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.JsonArray;
import com.google.gson.reflect.*;


/**
 * This is a servlet that accepts situation assertions and runs the Pellet reasoner over the norm model
 */
public class NormServer {

	static final Logger logger = LoggerFactory.getLogger(NormServer.class);

	public class SetRequest {
		private String id;
		private String satisfied;
		private String compliance;
	}

	// http://stackoverflow.com/questions/30039568/spark-web-framework-logging-requests-and-responses
	// http://stackoverflow.com/questions/21881846/where-does-the-slf4j-log-file-get-saved
	private static String requestInfoToString(Request request) {
		StringBuilder sb = new StringBuilder();
		sb.append(request.ip());
		sb.append(" " + request.requestMethod());
		sb.append(" " + request.url());
		sb.append(" " + request.queryParams());
		sb.append(" " + request.body());
		return sb.toString();
	}


	// https://sparktutorials.github.io/2016/05/01/cors.html
	// Enables CORS on requests. This method is an initialization method and should be called once.
	// This is potentially insecure, and may not be needed if both html and service are on the same server
	// (acc to responses to above tutorial, origin has to be "*" and don't need methods or headers parameters)
	// private static void enableCORS(final String origin, final String methods, final String headers) {
	private static void enableCORS(final String origin) {
		options("/*", (request, response) -> {
			String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
			if (accessControlRequestHeaders != null) {
				response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
			}
			
			String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
			if (accessControlRequestMethod != null) {
				response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
			}
			return "OK";
		});
		
		before((request, response) -> {
			// log.info(requestInfoToString(request));
			response.header("Access-Control-Allow-Origin", origin);
			//response.header("Access-Control-Request-Method", methods);
			//response.header("Access-Control-Allow-Headers", headers);
			// Note: this may or may not be necessary in your particular application
			response.type("application/json");
		});
	}

	// https://sparktutorials.github.io/2015/08/24/spark-heroku.html
	static int getHerokuAssignedPort() {
		ProcessBuilder processBuilder = new ProcessBuilder();
		if (processBuilder.environment().get("PORT") != null) {
			System.out.println("Heroku port: " + processBuilder.environment().get("PORT"));
			return Integer.parseInt(processBuilder.environment().get("PORT"));
		}
		return 4567; //return default port if heroku-port isn't set (i.e. on localhost)
	}

	public static void main(String[] args) {
		NormServer nr = new NormServer();
		
		port(getHerokuAssignedPort());
		enableCORS("*");

		before ((req, res) -> {
			logger.info(requestInfoToString(req));
		});
		
		get("/hello", (req, res) -> "Hello Heroku World");

        post("/assert", (req, res) -> {
			// eventually this service will go away and be replaced by the parameterized version /assert/:id 
			return nr.processRequests("agpl", req);
		});
		
        post("/assert/:modelId", (req, res) -> {
			return nr.findModelAndProcessRequests(req.params(":modelId"), req);
		});
		
        post("/assert/:modelId/:userId", (req, res) -> {
			return nr.findModelAndProcessRequests(req.params(":modelId"), req);
		});
	}

	public JsonArray findModelAndProcessRequests(String modelId, Request req) {
		String modelname;
		if (modelId.equals("1")) {
			modelname = "agpl";
		} else if (modelId.equals("2")) {
			modelname = "hipaa";
		} else if (modelId.equals("3")) {
			modelname = "apache2";
		} else if (modelId.equals("4")) {
			modelname = "hipaalite";
		} else if (modelId.equals("5")) {
			modelname = "apache2sub4";
		} else {
			return null;
		}

		return processRequests(modelname, req);
	}

	public JsonArray processRequests(String modelname, Request req) {
			// http://spark.screenisland.com/spark/Request.html for more info on the Request structure
			logger.debug(req.queryParams().toString());
			String reqstr = "";
			Iterator<String> iterator = req.queryParams().iterator();
			while (iterator.hasNext()) {
				reqstr = iterator.next();
				logger.debug(reqstr);
			}

			// https://www.mkyong.com/java/how-do-convert-java-object-to-from-json-format-gson-api/ for more info on Gson
			Gson gson = new Gson();
			List<SetRequest> setreqs = gson.fromJson(reqstr, new TypeToken<List<SetRequest>>(){}.getType());
			// setreqs.forEach(x -> System.out.println(x));
			
			// http://stackoverflow.com/questions/18857884/how-to-convert-arraylist-of-custom-class-to-jsonarray-in-java
			List<SetRequest> newvals = run(modelname, setreqs);
			JsonElement element   = gson.toJsonTree(newvals, new TypeToken<List<SetRequest>>(){}.getType());
			JsonArray jsonArray = element.getAsJsonArray();
			
			return jsonArray;
	}
	
	
	/**
	 * Assert the indicated situations and run the Pellet reasoner 
	 * @param - list of situations asserted by the user
	 * @return - value of "satisfied" property for all atomic situations and norms
	 */
	public List<SetRequest> run(String modelname, List<SetRequest> setreqs) {
		// String ontfile = "http://loki.ist.unomaha.edu/~hsiy/normserver/agpl-rdfxml.owl";
		String ontfile = modelname + "-rdfxml.owl";
		String ont = "http://www.semanticweb.org/hsiy/ontologies/2017/2/supernomos#";

		OntModel model = ModelFactory.createOntologyModel( PelletReasonerFactory.THE_SPEC, null );
		
		logger.debug("About the load the OWL file: " + ontfile);
		// model.read( ontfile ); // this does not work in maven build
		// https://www.mkyong.com/java/java-read-a-file-from-resources-folder/
		// http://www.baeldung.com/convert-file-to-input-stream
		ClassLoader classLoader = getClass().getClassLoader();
		// File file = new File(classLoader.getResource(ontfile).getFile());
		// InputStream modelfile = new FileInputStream(file); // does not work because resource is in jar file! http://stackoverflow.com/questions/9530549/why-contextclassloader-returns-path-with-exclamation-character
		InputStream modelfile = classLoader.getResourceAsStream(ontfile);
		if (modelfile == null) {
			return null;
		}
		logger.debug(modelfile.toString());
		model.read( modelfile, null );
		logger.debug("Loaded the OWL file");

		OntClass Norm = model.getOntClass( ont + "Norm" );
		OntClass Situation = model.getOntClass( ont + "Situation" );
		OntClass AtomicSituation = model.getOntClass( ont + "AtomicSituation" );
		DatatypeProperty satisfied = model.getDatatypeProperty(ont + "satisfied");
		OntClass SuperSituation = model.getOntClass( ont + "SuperSituation" );
		ObjectProperty containsProp = model.getObjectProperty(ont + "_contains");
		DatatypeProperty idProp = model.getDatatypeProperty(ont + "hasID");
		ExtendedIterator instanceList;

		// add object assertion to put root norm in a containing supersituation:
		//   collect norms contained in supersituations
		//   for each norm:
		// 	  if norm n is not contained
		// 		create supersituation clusterSS_n
		// 		add property clusterSS_n contains n
		instanceList = SuperSituation.listInstances();
		List<String> containedNorms = new ArrayList<String>();
		while( instanceList.hasNext() ) {
			Individual iSit = (Individual) instanceList.next();
			containedNorms.add(((Resource) iSit.getPropertyValue(containsProp)).getLocalName());
		}
		instanceList = Norm.listInstances();
		while( instanceList.hasNext() ) {
			Individual iNorm = (Individual) instanceList.next();
			if (!containedNorms.contains(iNorm.getLocalName())) {
				Individual superroot = model.createIndividual(ont + "clusterSS_" + iNorm.getLocalName(), SuperSituation);
				// model.add(superroot, idProp, "clusterSS_" + iNorm.getLocalName());
				superroot.addProperty(containsProp, iNorm);
				superroot.addDifferentFrom(iNorm);
				printPropertyValues(superroot, containsProp);
			}
		}

		// collect list of all atomic situations
 		List<String> allatomic = new ArrayList<String>();
		instanceList = AtomicSituation.listInstances();
		while( instanceList.hasNext() ) {
			Individual iAtomic = (Individual) instanceList.next();
			allatomic.add(iAtomic.getLocalName());
		}
	
		// for each r in setreqs:
		//	 if r.id in AtomicSituation and r.satisfied != "":
		//		changeSatisfied(model, ont, r.id, r.satisfied)
		List<String> atomicset = new ArrayList<String>();
		for (SetRequest r : setreqs) {
			Individual cand_situation = model.getIndividual( ont + r.id );
			// hasOntClass call appears to be running the reasoner everytime
			// if (r.satisfied.length() > 0 && cand_situation != null && cand_situation.hasOntClass(AtomicSituation, true)) {
			if (r.satisfied != null && r.satisfied.length() > 0 && cand_situation != null && allatomic.contains(cand_situation.getLocalName())) {
				changeSatisfied(model, ont, r.id, r.satisfied);
				atomicset.add(r.id);
			}
		}

		instanceList = AtomicSituation.listInstances();
		while( instanceList.hasNext() ) {
			Individual iAtomic = (Individual) instanceList.next();
			if (!atomicset.contains(iAtomic.getLocalName())) {
				// changeSatisfied(model, ont, iAtomic.getLocalName(), "SU");
				iAtomic.setPropertyValue(satisfied, model.createTypedLiteral("SU"));
			}
		}

		// run the reasoner
		model.prepare();

		// collect all situations and norm values
		List<SetRequest> returnvals = new ArrayList<SetRequest>();
		
		// can't do the following with ExtendedIterator??
		// for (Individual i : ) {
			// System.out.print(i.getLocalName() + ".satisfied: ");
			// printIterator( i.listPropertyValues( satisfied ) );
		// }
		instanceList = Situation.listInstances();
		while( instanceList.hasNext() ) {
			Individual iSit = (Individual) instanceList.next();
			System.out.print(iSit.getLocalName() + ".satisfied: ");
			printIterator( iSit.listPropertyValues( satisfied ) );
			
			SetRequest r = new SetRequest();
			r.id = iSit.getLocalName();
			Literal val = (Literal) iSit.getPropertyValue(satisfied);
			r.satisfied = (val != null)? val.getString() : "";
			returnvals.add(r);
		}

		DatatypeProperty Com = model.getDatatypeProperty(ont + "Com");
		DatatypeProperty Tol = model.getDatatypeProperty(ont + "Tol");
		DatatypeProperty Vio = model.getDatatypeProperty(ont + "Vio");
		DatatypeProperty Inc = model.getDatatypeProperty(ont + "Inc");
		instanceList = Norm.listInstances();
		while( instanceList.hasNext() ) {
			Individual iNorm = (Individual) instanceList.next();
			String compval = "";
			if (iNorm.getPropertyValue(Com) != null && ((Literal) iNorm.getPropertyValue(Com)).getBoolean()) {
				compval = "COM";
			} else if (iNorm.getPropertyValue(Tol) != null && ((Literal) iNorm.getPropertyValue(Tol)).getBoolean()) {
				compval = "TOL";
			} else if (iNorm.getPropertyValue(Vio) != null && ((Literal) iNorm.getPropertyValue(Vio)).getBoolean()) {
				compval = "VIO";
			} else if (iNorm.getPropertyValue(Inc) != null && ((Literal) iNorm.getPropertyValue(Inc)).getBoolean()) {
				compval = "INC";
			}
			System.out.println(iNorm.getLocalName() + " = " + compval);

			SetRequest r = new SetRequest();
			r.id = iNorm.getLocalName();
			r.compliance = compval;
			returnvals.add(r);
		}
		
/* 		Individual AGPL2 = model.getIndividual( ont + "AGPL2" );
		printDataProperty( AGPL2, Com);
		printDataProperty( AGPL2, Tol);
		printDataProperty( AGPL2, Vio);
		printDataProperty( AGPL2, Inc);
 */
 
/*		try {
			model.write(new FileWriter("output.owl"), "RDF/XML");
		} catch (IOException e) {
			logger.error("Model write failed");
		}
*/
		return returnvals;
	}


	/**
	 * Display all values for a given individual and property
	 */
	public static void printPropertyValues(Individual ind, Property prop) {
		System.out.print( ind.getLocalName() + " has " + prop.getLocalName() + "(s): " );
		printIterator( ind.listPropertyValues( prop ) );
	}

	/**
	 * Display all individuals in a class, including inferred ones
	 */
	public static void printInstances(OntClass cls) {
		System.out.print( cls.getLocalName() + " instances: " );
		printIterator( cls.listInstances() );
	}

	/**
	 * Iterate to print out all property values
	 */
	public static void printIterator(ExtendedIterator i) {
		if( !i.hasNext() ) {
			System.out.print( "none" );
		}
		else {
			while( i.hasNext() ) {
				//Resource val = (Resource) i.next();
				RDFNode val = (RDFNode) i.next();
				if (val.isResource()) {
					System.out.print( ((Resource)val).getLocalName() );
				} else if (val.isLiteral()) {
					System.out.print( ((Literal)val).getString() );
				} else {
					System.out.print( val );
				}
				if( i.hasNext() )
					System.out.print( ", " );
			}
		}
		System.out.println();
	}
	
	/**
	 * Display one values for a given individual and property.
	 * If there are more than one, Jena will arbitrarily pick one
	 */
	public static String printDataProperty(Individual ind, Property prop) {
		String retval;
		RDFNode val = ind.getPropertyValue(prop);
		if (val == null) {
			retval = "";
		} else if (val.isResource()) {
			retval = ((Resource)val).getLocalName();
		} else if (val.isLiteral()) {
			retval = ((Literal)val).getString();
		} else {
			retval = val.toString();
		}
		System.out.println(ind.getLocalName() + "." + prop.getLocalName() + ": " + retval);
		return retval;
	}

	/**
	 * Add satisfiability assertion.
	 * If there is an existing one, it will be overwritten.
	 */
	public static void changeSatisfied(OntModel model, String ont, String indname, String propval) {
		DatatypeProperty satisfied = model.getDatatypeProperty(ont + "satisfied");
		Individual ind = model.getIndividual( ont + indname );
		// RDFNode oldval = ind.getPropertyValue(satisfied);
		// if (oldval != null) {
			// ind.removeProperty(satisfied, oldval);
		// }
		ind.setPropertyValue(satisfied, model.createTypedLiteral(propval));
	}
}
