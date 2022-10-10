namespace c_sharp
{
    internal static class Program
    {
        public static void Main()
        {
            Console.WriteLine("//*** Begin Basics.cs ***//\n");
            Basics.GetBasics();

            Console.WriteLine("\n\n//*** Begin Operators.cs ***//\n");
            Operators.GetOperators();

            Console.WriteLine("\n\n//*** Begin Math.cs ***//\n");
            MathMethods.GetMath();

            Console.WriteLine("\n\n//*** Begin Strings.cs ***//\n");
            Strings.GetStrings();

            Console.WriteLine("\n\n//*** Begin Conditionals.cs ***//\n");
            Conditionals.GetConditionals();

            Console.WriteLine("\n\n//*** Begin Loops.cs ***//\n");
            Loops.GetLoops();

            Console.WriteLine("\n\n//*** Begin Arrays.cs ***//\n");
            Arrays.GetArrays();

            Console.WriteLine("\n\n\n\n");
        }
    }
}