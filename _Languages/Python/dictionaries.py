# dictionaries, ordered, mutable, no duplicates
myDict = {
    "key": "value",
    "key2": 6,
    "key3": 10.2918,
    "asd": ["other", "arrays", "too!"]
}

# Access data using keys
key2 = myDict["key2"]
# OR
key4 = myDict.get("asd")

# Get all keys
keys = myDict.keys()

# Get all values
values = myDict.values()

# Get all key:value pairs as tuples in a list
items = myDict.items() # returns [("key", "value"), ("key2", 6), etc...]

# Check for key
if "asd" in myDict:
    print("yuh")

# len() works on all collections
dictLength = len(myDict) # returns 4

# Add or change items
myDict["aKey"] = "aValue" # updates value if key exists, adds new if not
myDict.update({"key": "new value"}) # works the same

# remove items
myDict.pop("asd")

# remove last item inserted
myDict.popitem()

# del item
del myDict["key"]

# Clear dict
myDict.clear()

# del dict
del myDict

##########################################
newDict = {
    "asd1": "asd",
    "asd2": "asd",
    "asd3": "asd"
}

# Loop by key
for x in newDict:
    print("key =", x)
# OR
for x in newDict.keys():
    print(x)

# Loop by value
for x in newDict:
    print(newDict[x])
# OR
for x in newDict.values():
    print(x)

# Loop by item
for x, y in newDict.items():
    print(x, y)

##########################################

# Copy
newDictCopy = newDict.copy()
# OR
newDictCopy2 = dict(newDict)