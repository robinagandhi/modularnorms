from myutils import *

SSLinks = []

def genprologs():
	print 'digraph G {'
	print 'rankdir=BT'
	print 'overlap=false'
	print 'compound=true'
	print 'ranksep=0.5'

def genepilogs():
	global SSLinks
	for l in SSLinks:
		print l

	print '}'


def drawSS_start(id):
	ssname = 'SS_' + id
	print 'subgraph cluster' + ssname + ' {'
	print 'label = "' + ssname + '"'

def drawSS_end():
	print '}'

def drawNorm(id, sentence, color, orientation=0):
	print id + ' [shape=triangle, orientation=' + str(orientation) + ', style=filled, fillcolor=' + color + ', label="' + id + '", tooltip="' + sentence + '"];'

def drawDuty(id, sentence):
	drawNorm(id, sentence, 'lightblue')

def drawRight(id, sentence):
	drawNorm(id, sentence, 'lightblue', 270)

def drawSituation(slabel, id, type, suggestsid=''):
	global SSLinks
	sid = getsid(id, suggestsid)
	slabel = linebreak(slabel)
	boxcolor = 'white'

	if (slabel.startswith('$')):
		snorm = slabel[1:]
		slabel = 'SS_' + slabel[1:]
		SSLinks.append(sid + ' -> ' + snorm + '[color=grey, style=dashed, lhead=cluster' + slabel + '];')
		boxcolor = 'orange'

	if slabel in ['and', 'or', 'not']:
		boxcolor = 'grey'
	elif slabel[:3] in ['ST|', 'SF|', 'SU|']:
		atomicval = slabel[:2]
		if atomicval == 'ST':
			boxcolor = 'green'
		elif atomicval == 'SF':
			boxcolor = 'red'
		slabel = slabel[3:]

	if not (slabel in ['and', 'or', 'not'] or slabel.startswith('SS_') or sid == slabel): # not a special label
		slabel = sid + ': ' + slabel

	if boxcolor == 'white':
		print sid + ' [shape=box, label="' + slabel + '"];'
	else:
		print sid + ' [shape=box, label="' + slabel + '", style=filled, fillcolor=' + boxcolor + '];'
	if type not in ['and', 'or', 'not']:
		print sid + ' -> ' + id + '[label="' + type + '"];'
	else:
		print sid + ' -> ' + id + ';'
	return sid

