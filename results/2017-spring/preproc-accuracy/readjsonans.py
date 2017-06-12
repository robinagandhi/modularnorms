import fileinput
import json
import csv

equivElem = {}
#idsfile = open('agpl.ids')
idsfile = open('hipaalite.ids')
for line in idsfile:
	line = line.rstrip()
	toks = line.split(' ')
	for tok in toks:
		equivElem[tok] = toks[0]
		print tok, equivElem[tok]

targetslist = []
#answers = json.loads(open('agpl-answers.json').read())
answers = json.loads(open('hipaalite-answers.json').read())
for ans in answers:
	targets = {}
	for situvals in sorted(ans):
		print situvals['id'], situvals['satisfied'],
		if equivElem[situvals['id']] not in targets:
			targets[equivElem[situvals['id']]] = situvals['satisfied']
	targetslist.append(targets)
	print
	print 'Effective answer:', 
	for id in sorted(targets):
		print id, targets[id],
	print

#using tab-delimited file does not work - could not handle answers with embedded linefeeds
#qualdump = open('Session2-AGPL-G2-test.txt')
#for line in qualdump:
#	line = line.rstrip()
#	print line
#	row = line.split('\t')

#with open('Session2-AGPL-G2.csv', 'rb') as qualdump:
with open('Session2-HIPAA-G2.csv', 'rb') as qualdump:
	reader = csv.reader(qualdump)
	for row in reader:
		for question in [0,1,2]:  # [0,1] for AGPL
			count = 0
			correct = 0
			included = {}
			col = 24 + question*10
			jstr = row[col]
			#print jstr
			first = 0
			last = len(jstr)-1
			while first <= last and jstr[first] != '[':
				first += 1
			while first <= last and jstr[last] != ']':
				last -= 1
			jstr = jstr[first:(last+1)]
			#print jstr
			if jstr != '':
				studans = json.loads(jstr)
			else:
				studans = []
			#print studans
			for situvals in studans:
				if 'satisfied' in situvals:
					print situvals['id'],situvals['satisfied'],
					if situvals['id'] in equivElem and equivElem[situvals['id']] in targetslist[question]:
						if equivElem[situvals['id']] not in included:
							count += 1
							included[equivElem[situvals['id']]] = 1
							if situvals['satisfied'] == targetslist[question][equivElem[situvals['id']]]:
								correct += 1
								print 'Y*;',
							else:
								print 'Y;',
						else:
							print 'YD;',
					else:
						print 'N;',
			print count, '/', len(targetslist[question]), ';', correct, '/', len(targetslist[question])
			row[col] = jstr + '	' + str(count) + '	' + str(count/float(len(targetslist[question]))) + '	' + str(correct) + '	' + str(correct/float(len(targetslist[question]))) 
			
		rowstr = '	'.join(row)
		print rowstr
			