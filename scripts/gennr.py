from myutils import *

SSLinks = []
DutyList = []
RightList = []
SituationList = []
Rules = {}
STValues = []
SFValues = []
SUValues = []

def genprologs():
	return

def printNotEmpty(idlist, keyword):
	if len(idlist) > 0:
		print keyword, ' '.join(idlist)

def genepilogs():
	global Rules, DutyList, RightList, SituationList, STValues, SFValues, SUValues
	
	print ''
	printNotEmpty(DutyList, 'duty')
	printNotEmpty(RightList, 'right')
	printNotEmpty(SituationList, 'situation')
	
	print ''
	for ruleID in Rules:
		id, type = ruleID.split(':')
		if len(Rules[ruleID]) == 0: 
			print '## empty rule:',
		rulebody = ' '.join(Rules[ruleID]) + ' ' + id
		if type == 'or':
			print 'satisfy', rulebody, 'or'
		elif type == 'not':
			print 'break', rulebody # there should be only one
			# TODO? need shortcut if 'not' connects to norm? 
			# e.g. if prereq to N1 is 'not P1' then 
			#    'block P1 N1' rather than 
			#    'break P1 not1' followed by 'activate not1 N1' 
		elif type == 'and':
			print 'satisfy', rulebody
		elif type == 'satisfies':
			print 'satisfy', rulebody
		elif type == 'activates':
			print 'activate', rulebody
		else:
			print type, rulebody

	print ''
	printNotEmpty(STValues, 'value st')
	printNotEmpty(SFValues, 'value sf')
	printNotEmpty(SUValues, 'value su')


def createRule(ruleID):
	global Rules
	rule = []
	Rules[ruleID] = rule

def updateRule(ruleID, member):
	global Rules
	rule = Rules[ruleID]
	rule.append(member)
	Rules[ruleID] = rule


def drawSS_start(id):
	global SituationList
	ssname = 'SS_' + id
	SituationList.append(ssname)
	createRule(ssname + ':satisfies')


def drawSS_end():
	return

def drawNorm(id, normtype): 
	createRule(id + ':activates')
	createRule(id + ':satisfies')

def drawDuty(id, sentence):
	global DutyList
	print '#', id, '(Duty)', sentence
	DutyList.append(id)
	drawNorm(id, 'duty')

def drawRight(id, sentence):
	global RightList
	print '#', id, '(Right)', sentence
	RightList.append(id)
	drawNorm(id, 'right')


def drawSituation(slabel, id, type, suggestsid=''):
	global STValues, SFValues, SUValues, DutyList
	sid = getsid(id, suggestsid)
	print '#', sid, slabel

	if (slabel.startswith('$')):
		snorm = slabel[1:]
		slabel = 'SS_' + slabel[1:]
		createRule(sid + ':satisfies')
		updateRule(sid + ':satisfies', slabel)

	if slabel in ['and', 'or', 'not']:
		createRule(sid + ':' + slabel)
	elif slabel[:3] in ['ST|', 'SF|', 'SU|']:
		atomicval = slabel[:2]
		if atomicval == 'ST':
			STValues.append(sid)
		elif atomicval == 'SF':
			SFValues.append(sid)
		elif atomicval == 'SU':
			SUValues.append(sid)
		slabel = slabel[3:]

	SituationList.append(sid)
	updateRule(id + ':' + type, sid)
	
	# connect to supersituation if id is a norm (type in 'activates' or 'satisfies')
	if type == 'activates':
		ssname = 'SS_' + id
		updateRule(ssname + ':satisfies', sid)
	elif type == 'satisfies' and id in DutyList:
		ssname = 'SS_' + id
		updateRule(ssname + ':satisfies', sid)
	return sid

