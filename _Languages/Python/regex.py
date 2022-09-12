# Import RegularExpressions
import re

example = "This is a string to demonstrate using the 're' module"

# return a list of all matches to RegEx (empty list if no match)
all = re.findall("\s", example)
print("There are", len(all), "whitespace characters.")

# find first occurance, returns Match object OR None if no match
first = re.search("is", example)

# split at each match
words = re.split('\s', example)
print(words)

# replace each match
subExample = re.sub("o", "0", example)
print(subExample)