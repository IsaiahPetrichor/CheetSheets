namespace c_sharp
{
    internal static class Operators
    {
        public static void GetOperators()
        {
            // Arithmetic
            /*

            Op  Name            Description                     Example

            +	Addition	    Adds together two values	    x + y
            -	Subtraction	    Subtracts value	                x - y
            *	Multiplication	Multiplies two values	        x * y
            /	Division	    Divides one value by another	x / y
            %	Modulus	        Returns the division remainder	x % y
            ++	Increment	    Increases the value by 1	    x++
            --	Decrement	    Decreases the value by 1	    x--

            */

            // Assignment
            /*

            Op      Example     Same As

            =	    x = 5	    x = 5
            +=	    x += 3	    x = x + 3
            -=	    x -= 3	    x = x - 3
            *=	    x *= 3	    x = x * 3
            /=	    x /= 3	    x = x / 3
            %=	    x %= 3	    x = x % 3
            &=	    x &= 3	    x = x & 3
            |=	    x |= 3	    x = x | 3
            ^=	    x ^= 3	    x = x ^ 3
            >>=	    x >>= 3	    x = x >> 3
            <<=	    x <<= 3	    x = x << 3

            */

            // Comparison
            /*

            Op      Name            Example

            ==	    Equal to	    x == y
            !=	    Not equal	    x != y
            >	    Greater than	x > y
            <	    Less than	    x < y
            >=	    Greater||equal	x >= y
            <=	    Less||equal	    x <= y

            */

            // Logical
            /*

            Op      Name            Example

            && 	    Logical and	    x < 5 &&  x < 10
            || 	    Logical or		x < 5 || x < 4
            !	    Logical not		!(x < 5 && x < 10)

            */

            Console.WriteLine("Check Operators.cs for listings of all Operators");
        }
    }
}