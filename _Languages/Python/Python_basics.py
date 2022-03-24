# Note that python is indentation based instead of brackets

# Variable declarations "variable_name = value"
name = 'Isaiah'

# print to console
print(name)

# comparison operators
==
!=
<
>
<=
>=

# control flow
if value == True:
    print('is true')
elif value == False:
    print('is false')
else:
    print('its a boolean... it cant be anything else...')

# note: booleans must be capitalized in Python

# import modules
import random

# use the 'random' module (makes a number between 1 and 10 (inclusive))
random_number = random.randint(1, 10)

# make comments using the '#'
# multiline comments are made with a '#' at the start of each new line.

""" 
docstrings are comments that python will still read but ignore, many
programs will use docstrings to automatically generate code documentation
"""

# Python accepts both single quotes 'hello' and double quotes "hello"

# common errors in Python include 'SyntaxError', 'NameError', and 'TypeError'