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

def genClassAssert(classname, indivname):
	global URI
	print 'Declaration(NamedIndividual(<' + URI + indivname + '>))'
	print '# Individual: <' + URI + indivname + '> (<' + URI + indivname + '>)'
	print 'ClassAssertion(<' + URI + classname + '> <' + URI + indivname + '>)'

def genObjectProp(rel, src, dest):
	global URI
	print 'ObjectPropertyAssertion(<' + URI + rel + '> <' + URI + src + '> <' + URI + dest + '>)'

def genDataProp(rel, src, value):
	global URI
	print 'DataPropertyAssertion(<' + URI + rel + '> <' + URI + src + '> ' + value + ')'


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

# # Individual: <URI+S1> (<URI+S1>)

# ClassAssertion(<URI+Situation> <URI+S1>)
# ObjectPropertyAssertion(<URI+activate> <URI+S1> <URI+N1>)
# DataPropertyAssertion(<URI+hasID> <URI+S1> "S1"^^xsd:string)

OntoMap = {
	'activates': 'activate',
	'satisfies': 'satisfy',
	'or': 'or_',
	'and': 'and_',
	'not': 'not_'
}
	
def drawSituation(slabel, id, type, suggestsid=''):
	global SSLinks
	global OntoMap
	sid = getsid(id, suggestsid)
	#slabel = linebreak(slabel)
	if (slabel.startswith('$')):
		snorm = slabel[1:]
		slabel = 'SS_' + slabel[1:]
		# SSLinks.append(sid + ' -> ' + snorm + '[color=grey, style=dashed, lhead=cluster' + slabel + '];')
	if slabel in ['and', 'or', 'not']:
		classtype = slabel.upper()
	else:
		classtype = 'Situation'
	genClassAssert(classtype, sid)
	genObjectProp(OntoMap[type], sid, id)
	genDataProp('hasID', sid, '"' + sid + '"^^xsd:string')
	genDataProp('hasDesc', sid, '"' + slabel + '"^^xsd:string')
	return sid


