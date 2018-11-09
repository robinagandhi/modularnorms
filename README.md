# Modular Norms
The goal of this project is to develop a lightweight approach for modeling and reasoning about legal compliance. This is a repository for code and data to produce such modular norm models from legal text. 

Complying with legal regulatory requirements in privacy and security is necessary for critical software systems. Analysis of complex and voluminous legal text can benefit from the automation and traceability of logic-based models. We propose such a model based on norms. Norms are legal rights and associated duties expressed in regulatory documents. Such norm models help reason about available rights and required duties based on the satisfiability of situations, a state-of-affair, in a given scenario. Our method enables modular norm model extraction and reasoning. For extraction, using the theory of frame-semantics we construct two foundational norm templates that cover Hohfeld’s concepts of claim-right and its jural correlative, duty. Template instantiations from legal text result in a repeatable method for extraction of modular norm models. For reasoning, we introduce the notion of a super-situation. Super-situations contain other norm models. Compliance results from a modular norm are propagated to its containing super-situation, which in turn participates in other modular norms. This modularity allows on-demand incremental modeling and reasoning using simpler model primitives than previous approaches. 

# Examples

[Your Public License 1.0](https://robinagandhi.github.io/modularnorms/examples/yourlicense-test.html) is a toy example with instructions on its usage and interpretation. Here are the [accompanying slides](./examples/tutorial-slides.pptx).

For additional examples using legal statements "in the wild" explore the following: [AGPL](https://robinagandhi.github.io/modularnorms/examples/agpl-test.html), [Apache](https://robinagandhi.github.io/modularnorms/examples/apache-test.html) and [HIPAA](https://robinagandhi.github.io/modularnorms/examples/hipaalite-test.html) Models.

To better vizualise and provide context to the models, they have been integrated  with their corresponding legal text using a  multiview interface. The previous Your Public License 1.0 toy example is represented using the new interface [here](https://robinagandhi.github.io/modularnorms/public/ypl.html).   

These models have been generated from corresponding JSON objects in the examples directory as shown below.   

# Usage

Use/install Python 2.7 interpreter for running the following scripts to generate DOT and OWL files from a JSON description of modular norms.

```
# General usage format:
python2.7 gennomos.py <JSON file> [dot|owl]

# Example DOT file generation (use in graphviz)
python2.7 gennomos.py ../examples/agpl.json dot > ./agpl.dot

# Example OWL file generation (use in Protege)
python2.7 gennomos.py ../examples/agpl.json owl > ./agpl.owl

```

To generate an html file that displays the model and let a user interactively change satisfiability values, run the following scripts
```
# Generate the SVG file from Graphviz (need Graphviz 2.36 or above)
dot -Tsvg -o agpl.svg agpl.dot

# Make sure template.html is in the scripts directory (can copy from examples directory)
./xformsvg agpl > agpl-test.html
```
The result is an html file that calls an online reasoning service. For instructions on running your own server see instructions in the [normserver](https://github.com/robinagandhi/modularnorms/tree/master/normserver) directory




# Project Team
[Dr. Robin Gandhi](http://faculty.ist.unomaha.edu/rgandhi/)  
[Dr. Harvey Siy](http://cs2.ist.unomaha.edu/~hsiy/)  
[Sayonnha Mandal](https://www.unomaha.edu/college-of-information-science-and-technology/phd-it/directory/phd-students/sayonnha-mandal.php)  
[Olivier Avande](#)
