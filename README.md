# Modular Norms
This is a repository for code and data to produce modular norm models from legal text.

# Examples

[Your Public License 1.0](https://robinagandhi.github.io/modularnorms/examples/yourlicense-test.html) is a toy example with instructions on its usage and interpretation.

For additional examples using legal statements "in the wild" explore the following: [AGPL](https://robinagandhi.github.io/modularnorms/examples/agpl-test.html), [Apache](https://robinagandhi.github.io/modularnorms/examples/apache-test.html) and [HIPAA](https://robinagandhi.github.io/modularnorms/examples/hipaalite-test.html) Models.

These models have been generated from corresponding JSON objects in the examples directory as shown below.   

# Usage

Use/install Python 2.7 interpreter for running the following scripts to generate DOT and OWL files from a JSON description of modular norms.

```
# General usage format:
python2.7 gennomos.py <JSON file> [dot|owl]

# Example DOT file generation (use in graphviz)
python2.7 gennomos.py ../examples/agpl.json dot > ./agpl.dot

# Example OWL file generation (use in Protege)
python2.7 gennomos.py ../examples/agpl.json owl > ./agpl.owl

```

To generate an html file that displays the model and let a user interactively change satisfiability values, run the following scripts
```
# Generate the SVG file from Graphviz (need Graphviz 2.36 or above)
dot -Tsvg -o agpl.svg agpl.dot

# Make sure template.html is in the scripts directory (can copy from examples directory)
./xformsvg agpl > agpl-test.html
```
The result is an html file that calls an online reasoning service. For instructions on running your own server see instructions in the [normserver](https://github.com/robinagandhi/modularnorms/tree/master/normserver) directory
