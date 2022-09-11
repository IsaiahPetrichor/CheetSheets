# list syntax
from math import expm1


myList = ["item", "item"]

#############################

# Access zero indexed
myListWord = myList[0]

# Negative indexing (-1 is last, etc.)
myLastWord = myList[-1]

# Range of indecies (start:end excludes end)
myListRange = myList[0:1]

# Length of list
myListLen = len(myList)

# Check if exists
if "item" in myList:
    print("yert")

#############################

# List Mutation
myList[1] = "Different Item"

# Multiple changes
myList[0:2] = ["EEEE", "EEEE"]

# Insert without replacing
myList.insert(2, "3rd Element")

# Append to end of list
myList.append("Insert as last element")

# Append any iterable to another list
myList.extend(["new", "items", "in", "list"])

# Remove specific element (first occurance)
myList.remove("EEEE")

# Remove by index (last or specified)
myList.pop(0)

# Remove all elements
myList.clear()

# Delete entire list object
del myList

#############################
exampleList = ["asd", 5, 6, 198, 4092.09928, "boop"]

# Loop by element
for e in exampleList:
    print(e)

# Loop by index
for i in range(len(exampleList)):
    print(exampleList[i], i)

# Use while loop
i = 0
while i < len(exampleList):
    print(exampleList[i])
    i += 1

#############################

# List comprehension
[print(x) for x in exampleList]

# syntax: newlist = [expression for item in iterable if condition == True] ('if' is optional)

#############################

# sorting has to be same type elements
exampleList2 = [1, 5, 239, 2, 4]

# List Sorting
exampleList2.sort()

# Reverse sorting
exampleList2.sort(reverse = True)

# custom sort
def customFunc(n):
    return abs(n - 1)

exampleList2.sort(key = customFunc)


exampleList3 = ["a", "z", "c", "gh"]
# case insensitive sort
exampleList3.sort(key = str.lower)

# Reverse list
exampleList.reverse()

#############################

# Copy a list
newList = exampleList.copy()

# OR
newList2 = list(exampleList)

# Join lists
bigList = newList + newList2

# Append in a list
for x in newList:
    newList2.append(x)

# Extend list
newList.extend(newList2)

# https://www.w3schools.com/python/python_lists_methods.asp