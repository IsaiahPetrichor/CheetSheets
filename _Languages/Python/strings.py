###########################################

# String access
myString = "Hello nerds!"

thirdLetter = myString[2] # Gets 3rd letter because strings are zero indexed arrays

###########################################

# Looping in strings
for letter in myString:
    print(letter) # print letter for every letter in myString

###########################################

# String length
myStringLength = len(myString)

###########################################

# check for sub-string
hasHello = "Hello" in myString # Returns True because myString does have the substring 'Hello'

# check for NOT sub-string
noHello = "Hello" not in myString # Returns false beause it does have the substring 'Hello'

###########################################

# String Slicing
slicey = myString[2:5] # will contain 'llo'
sliceyTwo = myString[:6] # will contain 'Hello '
sliceyThree = myString[2:] # will contain 'llo nerds!'
sliceyFour = myString[2:-2] # will contain 'llo nerd'

###########################################

# String modification
newString = "bing bong said the distinguished gentleman"

print(newString.upper()) # prints newString in uppercase
print(newString.lower()) # prints newString in lowercase
print(newString.strip()) # prints newString with no leading OR trailing whitespace
print(newString.replace("m", 'EEE')) # prints newString as "bing bong said the distinguished gentleEEEan"
print(newString.split('the')) # prints the list ["bing bong said ", "distinguished gentleman"]

###########################################

# String formatting
# Insert numbers into strings using placeholders
text = "I am {0} years old"
print(text.format(22))

###########################################

# Escapes
textTwo = "Escape the so-called \"quotes\""

'''
\'	Single Quote	
\\	Backslash	
\n	New Line	
\r	Carriage Return	
\t	Tab	
\b	Backspace	
\f	Form Feed	
'''
# \ooo	Octal value	
# \xhh	Hex value