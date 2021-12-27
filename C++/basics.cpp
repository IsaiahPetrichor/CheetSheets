/*
Naming conventions:
Classes and Functions use Pascal case (ClassName).
everything else uses lowercase with underscores (variable_name)
*/

#include <iostream>
// Using namespace std // optional to avoid using std:: before certain
// declarations

int main() {  // main function required, always returns an int, 0, if it ran
              // properly

  // print the string 'Hello World'
  std::cout << "Hello World\n";

  // declare a variable of type 'int'
  int input;

  // receive user input and store it in a variable
  std::cin >> input;

  /*
  Common data types:
    int
    double
    char
    std::string
    bool
    array
    std::vector<type> // requires #include <vector>
  */

  /*
  Unique operators:
    //pre-increment
    --variable_name
    ++variable_name
    // this method assigns the new value to the original variable regardless of
  context

    //post-increment
    variable_name--
    variable_name++
    // this method does not assign the value to the original,
    ex.
    int old_var = 4;
    int new_var = old_var-- // new_var == 3 && old_var == 4


    Bitwise operators:
    <<
    >>
    ~
    &
    |
    ^
  */

  // end the program
  return 0;
}
