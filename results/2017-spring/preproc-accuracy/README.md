# Intermediate processing files

These intermediate files were used to compute derived values in the data files.

The process of finding the percentage of correct situations found is a combination of manual editing and scripting as described below.


1. create xxx.ids file with equivalent situation IDs:
`python dumpdot.py agpl.dot > agpl.ids`

2. create xxx-answers.json file, e.g., `agpl-answers.json`, with expected minimal answers 

3. save survey results in Excel as CSV, e.g., `Session2-AGPL-G2.csv`, and delete extra rows

4. calculate unique and correct matches: 
`python readjsonans.py | grep "^4/20" > Session2-AGPL-G2-augmented.txt`

