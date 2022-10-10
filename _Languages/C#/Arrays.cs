namespace c_sharp
{
    internal static class Arrays
    {
        public static void GetArrays()
        {
            // Define basic array
            int[] ints = { 1, 2, 3, 4, 5 };
            // arrays have set length and type

            // define an array in different ways
            string[] things;
            things = new string[] { "a", "b", "c" };

            // Loop through array using previous methods or
            // Foreach loop
            foreach (int i in ints)
            {
                Console.WriteLine(i);
            }

            // get array length
            Console.WriteLine(things.Length);

            // sort an array, sorts in alphabetical or numerical
            Array.Sort(things);

            // .Linq Namespace functions
            Console.WriteLine(ints.Sum());
            Console.WriteLine(ints.Max());
            Console.WriteLine(ints.Min());
        }
    }
}