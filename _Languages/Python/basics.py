# Variables are defined simply using '='
this_var = 'bing bong'
that_var = 6
the_var = "Double quotes are interchangable"

##########################################

# Type casting
x = str(3) # String '3'
y = float(3) # Float 3.0
z = int(3) # Integer 3

# Get type
print(type(y))

###########################################

'''
Naming conventions are simple

Variable names must start with an underscore or a letter
Camel Case, Pascal Case, and Snake Case are all valid
'''

###########################################

# Assign multiple varibles at one time
a, b, c = "A", "B", "C" # a = 'A', b = 'B', c = 'C'

# Assing same value to multiple variables
d = e = f = 'DEF'

# Unpacking / Array Destructuring
fruits = ["Apple", "Banana", "cherry"]
fruitOne, fruitTwo, fruitThree = fruits

###########################################

# String concatenation
print("string one needs a space at the end, " + "or it will be missing")
print("or you can seperate variables with commas and not need a space,", "this also type casts the variable to a string.")

###########################################

# Scope is simple
var1 = 5 # this is a global variable

def localFunc():
    var1 = "asd" # this is a local variable, seperate from the global one

def globalFunc():
    global var1 # use the 'global' keyword to change a global variable value in the local area

def declareFunc():
    global var2
    var2 = "asd asd" # or declare a new global inside a function

###########################################

'''
Built-in data types by category (category: type # example)

Text: str # "hello"
Numeric: int, float, complex # 1 | 1.0 | 1j
Sequence: list, tuple, range # [list, list] | (tuple, tuple) | range(3)
Mapping: dict # {"key": value}
Set: set, frozenset # {"value", "value"} | frozenset({"value", "value"})
Boolean: bool # True
None: NoneType # None

Binary: bytes, bytearray, memoryview # b"asd" | bytearray(5) | memoryview(bytes(5))
'''

###########################################

# Random numbers can be made with the 'random' module
import random

between0And6 = random.randrange(0, 7) # Up to but not including 7

###########################################

# Booleans
# evaluates to false: empty values like (), [], {}, "", 0, None, and False
# Remember, bools are Case Sensitive in Python