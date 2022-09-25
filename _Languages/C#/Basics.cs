using System;
using System.Security.Authentication;

namespace c_sharp
{
    internal static class Basics
    {
        public static void GetBasics()
        {
            //////////////////////////////////////////////////////
            // Console
            // use WriteLine to output to the console
            Console.WriteLine("Hello, World!");
            // or use Write to output without creating a new line
            Console.Write("Bing bong");
            Console.WriteLine(", Same line!");
            /*
            Multi-line comments too! just like JS
            */

            //////////////////////////////////////////////////////
            // Variables

            // declared by starting with their type
            int myInt = 148234;
            long longInt = 9223372036854775807; // 'long' is used for very large integers
            float smallPI = 3.14F; // floats are not very common in C#?
            const double PI = 3.14159265;
            char myChar = 'A';
            string myString = "I like turtles.";
            bool myBool = false;

            // Also declare multiple variables at once
            int x = 5, y = 6, z = 7;
            // OR
            int a, b, c;
            a = b = c = 5;

            //////////////////////////////////////////////////////
            // Type Casting

            // implicit casting
            double d = myInt;

            // explicit casting
            int i = (int)PI; // this will alter the value to '3'

            // type conversions
            Console.WriteLine(Convert.ToString(myInt));    // convert int to string
            Console.WriteLine(Convert.ToDouble(myInt));    // convert int to double
            Console.WriteLine(Convert.ToInt32(smallPI));  // convert double to int
            Console.WriteLine(Convert.ToString(myBool));   // convert boolean to string

            //////////////////////////////////////////////////////
            // User Input
            Console.Write("Please input user name: ");
            string username = Console.ReadLine();
            Console.WriteLine("Hello " + username + "!");
        }
    }
}