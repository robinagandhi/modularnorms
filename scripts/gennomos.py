import sys
import json
from pyparsing import *

if len(sys.argv) < 2:
	print 'Usage: ' + sys.argv[0] + ' <JSON file> [dot|owl]'
	sys.exit()

JSONFileName = sys.argv[1]
if len(sys.argv) > 2 and sys.argv[2] == 'owl':	
	from genowlfunc import *
else:
	from gendot import *

ident = Word(alphas, alphanums + "_").setName("identifier")
boolExpr = operatorPrecedence( ident,
	[
		("not", 1, opAssoc.RIGHT),
		("and", 2, opAssoc.LEFT),
		("or", 2, opAssoc.LEFT),
	])

def parseExpr(exprstr):
	tokens = boolExpr.parseString(exprstr, parseAll=True)
	return(tokens)


def drawSituationExpr(tokens, prestmts, id, type):
	if isinstance(tokens, basestring):
		sid = drawSituation(prestmts[tokens], id, type)
	elif tokens[1] in ['and', 'or']:
		sid = drawSituation(tokens[1], id, type)
		childid = drawSituationExpr(tokens[0], prestmts, sid, tokens[1])
		childid = drawSituationExpr(tokens[2], prestmts, sid, tokens[1])
	elif tokens[0] == 'not':
		sid = drawSituation(tokens[0], id, type)
		childid = drawSituationExpr(tokens[1], prestmts, sid, tokens[0])
	return sid

def drawSituations(slabel, id, type):
	if not isinstance(slabel, basestring):
		tokens = parseExpr(slabel[0])
		#print tokens
		prestmts = {}
		for p in slabel[1:]:
			temp = p.replace(': ',':').split(':')
			pid = temp[0]
			plabel = ':'.join(temp[1:])
			prestmts[pid] = plabel
		sid = drawSituationExpr(tokens[0], prestmts, id, type) # pyparse returns token list of one list item
	else:
		sid = drawSituation(slabel, id, type)
	return sid


def gennomos(modelfile):
	normtable = json.loads(open(modelfile).read())
	# print normtable
	# print normtable["model"]
	# print normtable["model"][0]
	# print normtable["model"][0]["table"]
	# print normtable["model"][0]["table"]["sentence"]

	genprologs()

	for t in normtable["model"]:
		tbl = t["table"]
		drawSS_start(tbl["id"])
		if (tbl["modal"] not in ["may", "can"]):
			isduty = True
		else:
			isduty = False
		if isduty:
			drawDuty(tbl["id"], tbl["sentence"])
		else:
			drawRight(tbl["id"], tbl["sentence"])
		consId = drawSituations(tbl["action"], tbl["id"], "satisfies")
		anteId = drawSituations(tbl["preconditions"], tbl["id"], "activates")
		drawSS_end()

	genepilogs()


gennomos(JSONFileName)