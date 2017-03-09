import fileinput

from myutils import *

SSLinks = []
######################

# Declaration(NamedIndividual(<URI+AND>))
# Declaration(NamedIndividual(<URI+N1>))

# # Individual: <URI+AND> (<URI+AND>)

# ClassAssertion(<URI+AND> <URI+AND>)
# ObjectPropertyAssertion(<URI+satisfy> <URI+AND> <URI+S1>)

# # Individual: <URI+N1> (<URI+N1>)

# ClassAssertion(<URI+Norm> <URI+N1>)
# DataPropertyAssertion(<URI+hasID> <URI+N1> "N1"^^xsd:string)

# # Individual: <URI+OR1> (<URI+OR1>)

# ClassAssertion(<URI+OR> <URI+OR1>)
# ObjectPropertyAssertion(<URI+block> <URI+OR1> <URI+N4>)
# ObjectPropertyAssertion(<URI+or_> <URI+OR1> <URI+OR2>)
# DataPropertyAssertion(<URI+SF> <URI+OR1> "true"^^xsd:boolean)
# DataPropertyAssertion(<URI+hasID> <URI+OR1> "OR1"^^xsd:string)

# # Individual: <URI+S1> (<URI+S1>)

# ClassAssertion(<URI+Situation> <URI+S1>)
# ObjectPropertyAssertion(<URI+activate> <URI+S1> <URI+N1>)
# DataPropertyAssertion(<URI+hasID> <URI+S1> "S1"^^xsd:string)

URI = 'http://www.semanticweb.org/hsiy/ontologies/2017/2/supernomos#'
Prefix = ':'

def genClassAssert(classname, indivname):
	global Prefix
	# print 'Declaration(NamedIndividual(<' + Prefix + indivname + '>))'
	# print '# Individual: <' + Prefix + indivname + '> (<' + Prefix + indivname + '>)'
	# print 'ClassAssertion(<' + Prefix + classname + '> <' + Prefix + indivname + '>)'
	print 'Declaration(NamedIndividual(' + Prefix + indivname + '))'
	print '# Individual: ' + Prefix + indivname + ' (' + Prefix + indivname + ')'
	print 'ClassAssertion(' + Prefix + classname + ' ' + Prefix + indivname + ')'

def genObjectProp(rel, src, dest):
	global Prefix
	# print 'ObjectPropertyAssertion(<' + Prefix + rel + '> <' + Prefix + src + '> <' + Prefix + dest + '>)'
	print 'ObjectPropertyAssertion(' + Prefix + rel + ' ' + Prefix + src + ' ' + Prefix + dest + ')'

def genDataProp(rel, src, value):
	global Prefix
	# print 'DataPropertyAssertion(<' + Prefix + rel + '> <' + Prefix + src + '> ' + value + ')'
	print 'DataPropertyAssertion(' + Prefix + rel + ' ' + Prefix + src + ' ' + value + ')'


def genprologs():
	file = open('template-func-prologs.owl', 'r')
	for line in file:
		print line,
	print ''

def genepilogs():
	# global SSLinks
	# for l in SSLinks:
		# print l

	file = open('template-func-epilogs.owl', 'r')
	for line in file:
		print line,
	print ''

def drawSS_start(id):
	# ssname = 'SS_' + id
	# print 'subgraph cluster' + ssname + ' {'
	# print 'label = "' + ssname + '"'
	print ''

def drawSS_end():
	# print '}'
	print ''

# # Individual: <URI+N1> (<URI+N1>)
# ClassAssertion(<URI+Norm> <URI+N1>)
# DataPropertyAssertion(<URI+hasID> <URI+N1> "N1"^^xsd:string)
def drawNorm(id, sentence):
	genClassAssert('Norm', id)
	genDataProp('hasID', id, '"' + id + '"^^xsd:string')
	genDataProp('hasDesc', id, '"' + sentence + '"^^xsd:string')

def drawDuty(id, sentence):
	drawNorm(id, sentence)

def drawRight(id, sentence):
	drawNorm(id, sentence)

def genSituationVals(id, val):
	if val == 'ST':
		genDataProp('hasST', id, '"true"^^xsd:boolean')
		genDataProp('hasSF', id, '"false"^^xsd:boolean')
		genDataProp('hasSU', id, '"false"^^xsd:boolean')
	elif val == 'SF':
		genDataProp('hasST', id, '"false"^^xsd:boolean')
		genDataProp('hasSF', id, '"true"^^xsd:boolean')
		genDataProp('hasSU', id, '"false"^^xsd:boolean')
	else: # val == 'SU' or is unspecified
		genDataProp('hasST', id, '"false"^^xsd:boolean')
		genDataProp('hasSF', id, '"false"^^xsd:boolean')
		genDataProp('hasSU', id, '"true"^^xsd:boolean')

# # Individual: <URI+S1> (<URI+S1>)

# ClassAssertion(<URI+Situation> <URI+S1>)
# ObjectPropertyAssertion(<URI+activate> <URI+S1> <URI+N1>)
# DataPropertyAssertion(<URI+hasID> <URI+S1> "S1"^^xsd:string)

OntoMap = {
	'activates': 'activate',
	'satisfies': 'satisfy',
	'or': 'or_',
	'and': 'and_',
	'not': 'not_',
	'contains': '_contains'
}
	
def drawSituation(slabel, id, type, suggestsid=''):
	global SSLinks
	global OntoMap
	sid = getsid(id, suggestsid)
	#slabel = linebreak(slabel)
	if (slabel.startswith('$')): # super situation
		snorm = slabel[1:]
		slabel = 'SS_' + slabel[1:]
		genObjectProp(OntoMap['contains'], sid, snorm)
	
	if slabel in ['and', 'or']: # logical and/or situation
		classtype = slabel.upper()
	elif slabel == 'not': # logical not situation
		classtype = 'LNOT'  # 'NOT' is apparently a reserved word?
	else: # atomic or super situation
		classtype = 'Situation'
	
	# extract atomic situation values
	isatomic = False
	atomicval = ''
	if not (slabel in ['and', 'or', 'not'] or slabel.startswith('SS_')): 
		isatomic = True
		if slabel[:3] in ['ST|', 'SF|', 'SU|']:
			atomicval = slabel[:2]
			slabel = slabel[3:]
		else:
			atomicval = 'SU'
			
	genClassAssert(classtype, sid)
	genObjectProp(OntoMap[type], sid, id)
	genDataProp('hasID', sid, '"' + sid + '"^^xsd:string')
	genDataProp('hasDesc', sid, '"' + slabel + '"^^xsd:string')
	if isatomic:
		genSituationVals(sid, atomicval)
	return sid


