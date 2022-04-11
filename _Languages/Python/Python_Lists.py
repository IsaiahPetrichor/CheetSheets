# Python has Arrays and Lists. Lists are the default by Arrays can be used
# by including the array module. Lists are dynamically typed but Arrays
# are static typed
a_list = ["This", 'is', 1, 'List', 'example']

# common List methods

# add an element to the end of an array
a_list.append('asd')
# delete an element from the array
a_list.remove('is')
# This deletes the FIRST element that matches the value ONLY

# to append multiple elements to a list without adding the list itself (ie. 
# making it a two dimensional list) use concatenation
a_new_list = a_list + ['asd', 'bing', 'bong']

# round down a float to an int
int(5.8293) # = 5

# select an element from a list using its index (Python is zero indexed)
third_element = a_new_list[2]

# select the last element using [-1]
last_element = a_new_list[-1]

# Python lists are entirely mutable
a_new_list[1] = 'jajajaja' # reassigns the second element
