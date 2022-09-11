# Define a class
class Person:
    # init (constructor)
    '''
    self is used as convention to assign properties to objects made of this class
    @name = str, persons name
    @age = int, persons age
    @skills = str[], persons skills
    '''
    def __init__(self, name, age, skills):
        self.name = name
        self.age = age
        self.skills = skills
        
    # Define an object method for the class
    # every function needs to be passed self
    # so it can reference itself
    def introduce(self):
        print("Hi! My name is", self.name + ".", "I am", self.age, "years old!", "My skills include:", self.skills)

# create an object with the class
me = Person("Isaiah", 22, ["Javascript", "Python", "etc..."])

# use an object method
me.introduce()

# modify properties
me.skills.append("Turtle hatching")
#me.introduce()

# del works on properties and entire objects

# define a child class
class Student(Person):
    def __init__(self, name, age, skills, major):
        super().__init__(name, age, skills)
        self.major = major
    
    def share(self):
        self.introduce()
        print("My major is", self.major)

me2 = Student("Isaiah", 22, ["Javascript", "Python", "etc..."], "Computer Science")

me2.share()