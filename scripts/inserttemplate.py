import sys
import fileinput

if len(sys.argv) < 2:
	modelname = 'hipaa'
else:
	modelname = sys.argv[1]


def insert(modelname):
	inserting = False
	file = open('template.html');
	for line in file:
		line = line.rstrip()
		if not inserting:
			if 'ADD your SVG file here as shown below' in line:
				inserting = True
				for svgline in sys.stdin:
					print svgline.rstrip()
			else:
				if '/assert/2/' in line:
					if modelname == 'agpl':
						print line.replace('assert/2','assert/1')
					elif modelname == 'apache2':
						print line.replace('assert/2','assert/3')
					elif modelname == 'hipaalite':
						print line.replace('assert/2','assert/4')
					elif modelname == 'apache2sub4':
						print line.replace('assert/2','assert/5')
					elif modelname == 'yourlicense':
						print line.replace('assert/2','assert/6')
					else: # default to hipaa
						print line
				elif '<title>Modular Norms</title>' in line:
					print line.replace('Norms','Norms - ' + modelname.upper())
				else:
					print line
		else:
			if '-->' in line:
				inserting = False


insert(modelname)

