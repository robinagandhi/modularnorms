
nextSitId = 1

def linebreak(str, maxlen=30):
	charsleft = len(str)
	insertAt = maxlen
	while charsleft > maxlen:
		while str[insertAt] != ' ':
			insertAt -= 1
			charsleft += 1
		str = str[:insertAt] + '\\n' + str[insertAt:]
		insertAt += maxlen
		charsleft -= maxlen
	return(str)


def getsid(id, suggestsid=''):
	global nextSitId
	if '_' in id:
		normid, temp = id.split('_')
	else:
		normid = id
	if suggestsid == '':
		sid = normid + '_' + str(nextSitId)
		nextSitId += 1
	else:
		sid = normid + '_' + suggestsid
	return sid
