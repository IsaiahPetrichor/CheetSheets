/* 
The model view controller design pattern is the most common way to 
structure applications that need to have visual interface and 
data storage.
*/

// Model
{
	/*
    The model is the data storage as well as the classes that represent
    that data within the application itself
    */
}

// View
{
	/*
    The view is essentially all visual parts of our application. this 
    includes most of our html and React components, however event 
    handlers and logic are considered part of 'controller'.
    */
}

// Controller
{
	/*
    The controller holds the majority of the logic behind our 
    application, including handling all communication between the model
    and view.
    */
}

// Benefits of this design
{
	/*
    The primary advantage of the MVC pattern is the separation of the 
    data representation, logical, and presentational layers. By 
    keeping these aspects from being highly tied together, they can 
    be modified independently. Changing the Model should not require 
    major changes to the View, and vice versa.

    By separating the Controller from the View, we can create multiple 
    ways of viewing our application. For example, an application can 
    have the web and mobile Views interact with the same Controller. 
    This can allow us to greatly reduce the amount of work needed to 
    port our application to new means of user interaction.
    */
}

// Drawbacks of this design
{
	/*
    It can introduce unneeded complexity to an application. Having 
    multiple components and structure may not be necessary for 
    simpler applications. A decent guideline is that if our 
    application requires multiple people for development, having a 
    pattern such as MVC probably would be helpful.
    */
}
