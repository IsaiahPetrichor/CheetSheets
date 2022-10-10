namespace c_sharp
{
    internal static class Loops
    {
        public static void GetLoops()
        {
            // While loop
            int i = 0;
            while (i < 5)
            {
                Console.WriteLine(i);
                i++;
            }

            // Do While loop
            int j = 0;
            do
            {
                j++;
                if (j < 3)
                {
                    continue;
                }
                Console.WriteLine(j);
            } while (j < 5);

            // For loop
            for (int k = 0; k < 3; k++)
            {
                if (k == 2)
                {
                    break;
                }
                Console.WriteLine(k);
            }

            // Foreach loop is in Arrays.cs
        }
    }
}