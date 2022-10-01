namespace c_sharp
{
    internal static class Conditionals
    {
        public static void GetConditionals()
        {
            // if / else / else if
            int x = 0;
            int y = 4;
            if (x > y)
            {
                Console.WriteLine("x is greater than y");
            }
            else if (y > x)
            {
                Console.WriteLine("x is less than y");
            }
            else
            {
                Console.WriteLine("x is equal to y");
            }
        }
    }
}