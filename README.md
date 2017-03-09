# Modular Norms
This is a repository for code and data to produce modular norm models from legal text.

# Example
See the examples folder for SVG files produced for AGPLv1.0, Apache2 and HIPAA Models. These models have been generated from corresponding JSON objects in the directory.

# Usage



```
# General usage format: 
python gennomos.py <JSON file> [dot|owl]

# Example DOT file generation (use in graphviz)
python gennomos.py ../examples/agpl.json dot > ./agpl.dot

# Example OWL file generation (use in Protege)
python gennomos.py ../examples/agpl.json owl > ./agpl.owl

```
