public class Basics {
    public static void main(String[] args) {
        ////////////////////////////////////////

        // Print without new line
        System.out.print("No new line, ");
        // Print and insert new line
        System.out.println("Hello World!");

        /*
        * Multiline comments just like JS and C#
        */

        ////////////////////////////////////////
        // Types & Variables
        
        // Primitives
        // chars take a single letter || ASCII value of character
        char myLetter = 'A';
        boolean myBool = true;
        // ints hold from -2147483648 to 2147483647, usally preferred
        int myNum = 15;
        // bytes can store from -128 to 127
        byte myByte = 127;
        // short from -32768 to 32767
        short myShort = 4975;
        // long from -9223372036854775808 to 9223372036854775807 'L' at the end
        long myLong = 39875987239898357L;
        // floats for decimals with 6-7 decimal digits 'f' at the end
        float myFloat = 15.53478f;
        // doubles are the same but with ~15 digit precision 'd' at the end
        double myDub = 13.3498348972d;

        // Non-primitive Uppercase
        String myStr = "Hello Mate";
        // + Arrays, Classes

        // Type Casting

        // Widening, implicit & automatic
        double wasInt = myNum;

        // Narrowing, manual & changes value to fit new type
        int wasDouble = (int)wasInt;

        // Constants
        final int number = 50;

        // Multiple variables
        int a = 1, b = 2, c = 3;
        // OR
        int x, y, z;
        x = y = z = 5;

        System.out.println("\nAll my unused variables so far: ");
        System.out.println(myByte);
        System.out.println(myBool);
        System.out.println(myLetter);
        System.out.println(myShort);
        System.out.println(myLong);
        System.out.println(myFloat);
        System.out.println(myDub);
        System.out.println(myStr);
        System.out.println(wasDouble);
        System.out.println(number);
        System.out.println(b + c);
        System.out.println("End of random variables\n\n");

        ////////////////////////////////////////
        // Conditionals

        // if / else / else if
        if (a < x) {
            // do something
            System.out.println("first block");
        } else if (y > z) {
            // do something
            System.out.println("second block");
        } else {
            // do something
            System.out.println("third block");
        }

        // Ternary operator | variable = (condition) ? expressionTrue :  expressionFalse;
        int asd = c < number ? c : number;
        System.out.println(asd);

        // Switch statements
        switch(myStr.length()){
            case 1:
                // do something
                break;
            case 2:
                // do something
                break;
            default:
                System.out.println("Greater than two");

        }

        ////////////////////////////////////////
        // Math
        // all the basics
        Math.min(5, 23);
        Math.max(5, 23);
        Math.abs(-456978);
        Math.sqrt(4598);
    }
}