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
    }
}