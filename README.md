# Modular Norms
This is a repository for code and data to produce modular norm models from legal text.

# Example
See the examples folder for SVG files produced for AGPLv1.0, Apache2 and HIPAA Models. These models have been generated from corresponding JSON objects in the directory.

# Usage

Use/install Python 2.7 interpreter for running the scripts

```
# General usage format: 
python2.7 gennomos.py <JSON file> [dot|owl]

# Example DOT file generation (use in graphviz)
python2.7 gennomos.py ../examples/agpl.json dot > ./agpl.dot

# Example OWL file generation (use in Protege)
python2.7 gennomos.py ../examples/agpl.json owl > ./agpl.owl

```
