// Unit / Feature Tests
/*
    Used to test specific pieces of the program, does not 
    interact with other parts of the tech stack.

    individual tests have a fast runtime, however, to test a whole 
    application takes a long time and a lot of code
*/

// Integration Tests / end-to-end testing
/*
    Includes everything in-between Unit tests and System tests.

    these are used to test everything that interacts with each other,
    this is the vaguest type of test because it lies on a spectrum
    of inclusivity and descriptiveness.
*/

// System Tests
/*
    Full end to end tests that check the whole application is 
    working properly.

    has a long runtime and is less descriptive, however it takes 
    less time and guarantees that despite of any errors or bugs, 
    the end result is the desired one.
*/

// The Testing Pyramid

// Browser / UI
/*
    Should have the fewest tests, more expensive
*/

// Server
/*
    Mostly integration tests, interaction with the database & other
    parts of the tech stack
*/

// Model
/*
    Unit tests that check individual parts of the application
*/

// The Testing Suite
/*
Is a feature-level integration test necessary?
Can I test the same behavior with server and model layer tests?
How much confidence do I have with the server and model layer tests?
How long does the feature test take? Will that impact my team’s workflow?
*/

// Always - RED, GREEN, REFACTOR
