from ast import parse
import json

# example JSON
x = '{ "name": "Isaiah" }'

# parse into Python dict
parsed = json.loads(x)
print(parsed)

# convert dict to json
jsonAgain = json.dumps(parsed)

print(jsonAgain)

# any object type can be dumped

# format the dump to be indented and sorted
json.dumps(parsed, indent=4, sort_keys=True)