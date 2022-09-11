import datetime

# get raw time
x = datetime.datetime.now()

# format datetime (ex. Month Day Year)
date = x.strftime("%A, %B %d %Y")
print(date)

time = x.strftime("%I:%M%p %Z")
print(time)

# datetime ref: https://www.w3schools.com/python/python_datetime.asp
