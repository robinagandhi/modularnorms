import fileinput

equivs = {}
for line in fileinput.input():
	if 'shape=triangle' in line or ('shape=box' in line and 'fillcolor=' not in line):
		line = line.rstrip()
		toks = line.split(' ')
		nodename = toks[0]
		if 'shape=triangle' in line: # norms have desc in tooltip
			dstart = line.find('tooltip=') + 9 # advance past the tooltip=
		elif 'shape=box' in line and 'fillcolor=' not in line:
			dstart = line.find('label=') + 7 # advance past the label=
		desc = line[dstart:-3]
		#print nodename + ':' + desc
		if desc in equivs:
			equivs[desc].append(nodename)
		else:
			equivs[desc] = [nodename]

for desc in equivs:
	for node in equivs[desc]:
		print node,
	print

