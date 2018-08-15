from myutils import *

# these DLV rules approximate the behavior of the OWL rules as of 8/6/2018
#
# OWL rule changes as of 8/6/2018:
# Rights:
# AF -> Nex (was AF -> Inc)
# AT -> Exr (new rule - replaces the next 3 rules below)
#     AT and SF -> Tol (deleted rule)
#     AT and SU -> Tol (deleted rule)
#     AT and ST ->  Com (deleted rule)
# Exr propagates as ST (new rule)
# Nex propagates as SF (new rule)
#
# Duties:
# AF -> Com (was AF -> Tol)
# AT and SU -> Vio (was AT and SU -> Inc)
#
# All Norms:
# Tol propagates as ST (deleted rule)
# AU -> Inc (new rule - merged from separate but same rules for Duty and Right)
# 
# on example yourlicense-test.html (as of 3/27/2018) and using the OWL rules available at that time,
#   the results converge now given [sf(YPL4a_2), st(YPL4a_1), st(YPL4_3)]:
#       SWRL: [com(YPL4a), exr(YPL4)]
#       DLV: [com(YPL4a), exr(YPL4)]

SSLinks = []
DutyList = []
RightList = []
SituationList = []
Rules = {}
STValues = []
SFValues = []
SUValues = []
SitVal = {}

def genprologs():
	return


def printNotEmpty(idlist, keyword):
	if len(idlist) > 0:
		print '%', keyword, ' '.join(idlist)
	for id in idlist:
		if keyword == 'duty':
			printDuty(id)
		elif keyword == 'right':
			printRight(id)
		elif keyword == 'situation':
			printSituation(id)
		elif 'value' in keyword:
			(dummy, val) = split(keyword, ' ')
			printSitVal(id, val)
	

# % Applicability and satisfiability rules for norm hipaa2
# st(hipaa2) :- stx(hipaa2).
# su(hipaa2) :- sux(hipaa2), not stx(hipaa2).
# sf(hipaa2) :- sfx(hipaa2), not sux(hipaa2), not stx(hipaa2).
# at(hipaa2) :- atx(hipaa2).
# au(hipaa2) :- aux(hipaa2), not atx(hipaa2).
# af(hipaa2) :- afx(hipaa2), not aux(hipaa2), not atx(hipaa2).

# % Compliance rules for right hipaa2
# com(hipaa2) :- at(hipaa2), st(hipaa2).
# tol(hipaa2) :- at(hipaa2), not st(hipaa2).
# tol(hipaa2) :- af(hipaa2).
# inc(hipaa2) :- au(hipaa2).
# tol(hipaa2) :- com(hipaa2).
# acc(hipaa2) :- tol(hipaa2).
# acc(hipaa2) :- vio(hipaa2).

# % Compliance rules for duty hipaa2a
# com(hipaa2a) :- at(hipaa2a), st(hipaa2a).
# vio(hipaa2a) :- at(hipaa2a), not st(hipaa2a).
# tol(hipaa2a) :- af(hipaa2a).
# inc(hipaa2a) :- au(hipaa2a).
# tol(hipaa2a) :- com(hipaa2a).
# conf(hipaa2a) :- atx(hipaa2a), stx(hipaa2a), not stx(hipaa2a).
# acc(hipaa2a) :- tol(hipaa2a).
# acc(hipaa2a) :- vio(hipaa2a).

def printCommonNorm(id, type):
	print '% Applicability and satisfiability rules for norm', id
	print 'st(', id, ') :- stx(', id, ').'
	print 'su(', id, ') :- sux(', id, '), not stx(', id, ').'
	print 'sf(', id, ') :- sfx(', id, '), not sux(', id, '), not stx(', id, ').'
	print 'at(', id, ') :- atx(', id, ').'
	print 'au(', id, ') :- aux(', id, '), not atx(', id, ').'
	print 'af(', id, ') :- afx(', id, '), not aux(', id, '), not atx(', id, ').'
	print

def printDuty(id):
	printCommonNorm(id, 'duty')
	print '% Compliance rules for duty', id
	print 'com(', id, ') :- at(', id, '), st(', id, ').'
	print 'vio(', id, ') :- at(', id, '), not st(', id, ').'
	# change AF -> Tol to AF -> Com
	print 'com(', id, ') :- af(', id, ').'
	#print 'tol(', id, ') :- af(', id, ').'
	print 'inc(', id, ') :- au(', id, ').'
	print 'tol(', id, ') :- com(', id, ').'
	print 'conf(', id, ') :- atx(', id, '), stx(', id, '), not stx(', id, ').'
	print 'acc(', id, ') :- tol(', id, ').'
	print 'acc(', id, ') :- vio(', id, ').'
	print
	
def printRight(id):
	printCommonNorm(id, 'right')
	print '% Compliance rules for right', id
	# change (AT and ST -> Com, AT and not ST -> Tol) to AT -> Exr
	print 'exr(', id, ') :- at(', id, ').'
	#print 'com(', id, ') :- at(', id, '), st(', id, ').'
	#print 'tol(', id, ') :- at(', id, '), not st(', id, ').'
	# change AF -> Tol to AF -> Inc to AF -> Nex
	print 'nex(', id, ') :- af(', id, ').' 
	#print 'inc(', id, ') :- af(', id, ').'
	#print 'tol(', id, ') :- af(', id, ').'
	print 'inc(', id, ') :- au(', id, ').'
	print 'tol(', id, ') :- com(', id, ').'
	print 'acc(', id, ') :- tol(', id, ').'
	print 'acc(', id, ') :- vio(', id, ').'
	print 

# % Satisfiability rules for situation hipaa2_1
# st(hipaa2_1) :- stx(hipaa2_1).
# su(hipaa2_1) :- sux(hipaa2_1), not stx(hipaa2_1).
# sf(hipaa2_1) :- sfx(hipaa2_1), not sux(hipaa2_1), not stx(hipaa2_1).

def printSituation(id):
	print '% Satisfiability rules for situation', id
	print 'st(', id, ') :- stx(', id, ').'
	print 'su(', id, ') :- sux(', id, '), not stx(', id, ').'
	print 'sf(', id, ') :- sfx(', id, '), not sux(', id, '), not stx(', id, ').'
	print


def printSitVal(id, val):
	if val in ['st', 'sf', 'su']:
		print val, '(', id, ').'
	else:
		print 'st(', id, ') v sf(', id, ') v su(', id, ').'

	
def printAndSatisfy(id, elems):
	print '% and-satisfy(', id, ',', elems, ').'
	print 'stx(', id, ') :- ', 
	for ndx, elem in enumerate(elems):
		if ndx > 0:
			print ', ', 
		print 'st(', elem, ')', 
	print '.'
	print 'st_rel(', id, ', rsat) :- stx(', id, ').'
	for elem in elems:
		# change behavior from SF and * -> SU to SF and * -> SF 
		print 'sfx(', id, ') :- sf(', elem, ').'
		print 'sf_rel(', id, ', rsat) :- sfx(', id, ').'
		print 'sux(', id, ') :- not st(', elem, '), not sf(', elem, ').'
		# print 'sux(', id, ') :- not st(', elem, ').'
		print 'su_rel(', id, ', rsat) :- sux(', id, ').'
	print
	

def printOrSatisfy(id, elems):
	print '% or-satisfy(', id, ',', elems, ').'
	# change behavior from SF or SF -> SU to SF or SF -> SF 
	print 'sfx(', id, ') :- ', 
	#print 'sux(', id, ') :- ', 
	for ndx, elem in enumerate(elems):
		if ndx > 0:
			print ', ', 
		print 'sf(', elem, ')', 
		#print 'not st(', elem, ')', 
	print '.'
	# change behavior from SF or SF -> SU to SF or SF -> SF 
	print 'sf_rel(', id, ', rsat) :- sfx(', id, ').'
	#print 'su_rel(', id, ', rsat) :- sux(', id, ').'
	for elem in elems:
		print 'stx(', id, ') :- st(', elem, ').'
		print 'st_rel(', id, ', rsat) :- stx(', id, ').'
		# change behavior from SF or SF -> SU to SF or SF -> SF 
		print 'sux(', id, ') :- not st(', elem, '), not sf(', elem, ').'
		print 'su_rel(', id, ', rsat) :- sux(', id, ').'
	print

def printAndActivate(id, elems):
	print '% and-activate(', id, ',', elems, ').'
	print 'atx(', id, ') :- ', 
	for ndx, elem in enumerate(elems):
		if ndx > 0:
			print ', ', 
		print 'st(', elem, ')', 
	print ', not st(', id+'s', ').'
	print 'at_rel(', id, ', ract) :- atx(', id, ').'
	for elem in elems:
		# change behavior from AF and * -> AU to AF and * -> AF 
		print 'afx(', id, ') :- sf(', elem, ').'
		print 'af_rel(', id, ', rsat) :- afx(', id, ').'
		print 'aux(', id, ') :- not st(', elem, '), not sf(', elem, '), not st(', id+'s', ').'
		# print 'aux(', id, ') :- not st(', elem, '), not st(', id+'s', ').'
		print 'au_rel(', id, ', ract) :- aux(', id, ').'
	print

def printBreak(id, elems):
	print '% and-break(', id, ',', elems, ').'
	print 'sfx(', id, ') :- ', 
	for ndx, elem in enumerate(elems):
		if ndx > 0:
			print ', ', 
		print 'st(', elem, ')', 
	print '.'
	print 'sf_rel(', id, ', rbrk) :- sfx(', id, ').'
	for elem in elems:
		print 'sux(', id, ') :- not st(', elem, ').'
		print 'su_rel(', id, ', rbrk) :- sux(', id, ').'
	print

def printBlock(id, elems):
	print '% and-block(', id, ',', elems, ').'
	print 'afx(', id, ') :- ', 
	for ndx, elem in enumerate(elems):
		if ndx > 0:
			print ', ', 
		print 'st(', elem, ')', 
	print ', not st(', id+'s', ').'
	print 'af_rel(', id, ', rblk) :- afx(', id, ').'
	for elem in elems:
		print 'aux(', id, ') :- not st(', elem, '), not st(', id+'s', ').'
		print 'au_rel(', id, ', rblk) :- aux(', id, ').'
	print


def printContains(id, elems):
	global DutyList
	for elem in elems:
		print '% propagate ', elem, ' to ', id, '.'
		if elem in DutyList:
			print 'st(', id, ') :- com(', elem, ').'
			print 'sf(', id, ') :- vio(', elem, ').'
		else:
			print 'st(', id, ') :- exr(', elem, ').'
			print 'sf(', id, ') :- nex(', elem, ').'
		print 'su(', id, ') :- inc(', elem, ').'
	print
	
	
def genepilogs():
	global Rules, DutyList, RightList, SituationList, STValues, SFValues, SUValues
	
	# lowercase all ids
	DutyList = [id.lower() for id in DutyList]
	RightList = [id.lower() for id in RightList]
	SituationList = [id.lower() for id in SituationList]
	STValues = [id.lower() for id in STValues]
	SUValues = [id.lower() for id in SUValues]
	SFValues = [id.lower() for id in SFValues]
	
	print ''
	printNotEmpty(DutyList, 'duty')
	printNotEmpty(RightList, 'right')
	printNotEmpty(SituationList, 'situation')
	
	print ''
	for ruleID in Rules:
		id, type = ruleID.split(':')
		id = id.lower()
		if len(Rules[ruleID]) == 0: 
			print '% ## empty rule:', type, id
			print 
			continue
		Rules[ruleID] = [sid.lower() for sid in Rules[ruleID]]
		rulebody = ' '.join(Rules[ruleID]) + ' ' + id
		if type == 'or':
			print '%satisfy', rulebody, 'or'
			printOrSatisfy(id, Rules[ruleID])
		elif type == 'not':
			print 'break', rulebody # there should be only one
			printBreak(id, Rules[ruleID])
			# TODO? need shortcut if 'not' connects to norm? 
			# e.g. if prereq to N1 is 'not P1' then 
			#    'block P1 N1' rather than 
			#    'break P1 not1' followed by 'activate not1 N1' 
		elif type == 'and':
			print '%satisfy', rulebody
			printAndSatisfy(id, Rules[ruleID])
		elif type == 'satisfies':
			print '%satisfy', rulebody
			printAndSatisfy(id, Rules[ruleID])
		elif type == 'activates':
			print '%activate', rulebody
			printAndActivate(id, Rules[ruleID])
		elif type == 'contains':
			print '%contains', rulebody
			printContains(id, Rules[ruleID])
		else:
			print '% unknown rule:', type, rulebody

	print ''
	print '% Scenario'
	printNotEmpty(STValues, 'value st')
	printNotEmpty(SFValues, 'value sf')
	printNotEmpty(SUValues, 'value su')
	for sid in SituationList:
		if sid not in SitVal:
			printSitVal(sid, 'all')
	print ''

	print '% Costs'
	print '% cost 2: uncompliance'
	for id in DutyList:
		print ':~ vio(', id, '). [1:2]'
	for id in RightList:
		print ':~ vio(', id, '). [1:2]'
	print '% cost 1: freedom'
	for id in SituationList:
		print ':~ st(', id, '). [1:1]'
	
	

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
	# createRule(ssname + ':satisfies') # not needed; no situation satisfies a supersituation, follow 'contains' rules
	createRule(ssname + ':contains')
	updateRule(ssname + ':contains', id)


def drawSS_end():
	return



def drawNorm(id, normtype): 
	createRule(id + ':activates')
	createRule(id + ':satisfies')
	
def drawDuty(id, sentence):
	global DutyList
	print '%', id, '(Duty)', sentence
	DutyList.append(id)
	drawNorm(id, 'duty')

def drawRight(id, sentence):
	global RightList
	print '%', id, '(Right)', sentence
	RightList.append(id)
	drawNorm(id, 'right')


def drawSituation(slabel, id, type, suggestsid=''):
	global STValues, SFValues, SUValues, DutyList
	sid = getsid(id, suggestsid)
	print '%', sid, slabel

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
		SitVal[sid] = atomicval
		slabel = slabel[3:]

	SituationList.append(sid)
	updateRule(id + ':' + type, sid)
	
	# # connect to supersituation if id is a norm (type in 'activates' or 'satisfies')
	# if type == 'activates':
		# ssname = 'SS_' + id
		# updateRule(ssname + ':satisfies', sid)
	# elif type == 'satisfies' and id in DutyList:
		# ssname = 'SS_' + id
		# updateRule(ssname + ':satisfies', sid)
	return sid

