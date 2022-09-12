try:
    print("ello")
except:
    print("Error message here")
else:
    print("No error here (optional)")
finally:
    print("After error handling (optional)")

# multiple error handling
asd = 15826787312

try:
    print(asd)
except NameError:
    print("Call to non-existant variable")
except: 
    print("other error")

# Intentionally throw an error
if type(123) != type("123"):
    raise AssertionError("int 123 does not equal str '123'")