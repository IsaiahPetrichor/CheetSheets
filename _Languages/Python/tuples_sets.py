# Define a tuple
aTuple = ("a", "b", "c")

# Single element tuples require a comma at the end
aTuple2 = ("tuple",)

# Accessing tuples works exactly the same as lists

# Tuples are Immutable
# Add an item by converting to list
temp = list(aTuple)
temp.append('Element')
aTuple = tuple(temp)

# OR add a tuple to another and make a new tuple
aTuple += aTuple2 # also how you join tuples

# Removing items only works by converting to a list first

# Unpacking or Destructuring also works on tuples
(first, second, third) = aTuple # first = 'a', second = 'b', etc.

# Use an * before a variable name to assign it more than one value as a list
(one, *all) = aTuple # one = 'a', all = [...elements]

# Loops are the same as lists

###################################################

# Sets, Unordered, immutable, no duplicates
mySet = {"ello", "a", "set!"}

# Access sets like lists but only by element, no indecies or keys

# Add elements
mySet.add("bing bong")

# join sets (or any iterable)
mySet.update(["this", "works"])
mySet.update({"so", "does", "this"})

# Remove or Discard

# remove throws error if element not present
mySet.remove("bing bong")

# discard removes but wont throw error if element not present
mySet.discard("this")

# .pop() works but sets are unordered so it is unpredictable

# empty the set
mySet.clear()

# delete the set
del mySet