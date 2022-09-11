# import from built in modules
import math

# import only part from a module
from math import sqrt

# import from other local files (by file name, except the .py)
import lists

aList = lists.exampleList

# import part from local file
from strings import newString as bingBong

# call directly instead of using module. syntax
print(bingBong)

# modules are most useful for sharing objects or functions