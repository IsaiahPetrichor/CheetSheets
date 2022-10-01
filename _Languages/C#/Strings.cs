namespace c_sharp
{
    internal static class Strings
    {
        public static void GetStrings()
        {
            string myString = "Hello mate!";
            string secondStr = "I like turtles.";
            // String length
            Console.WriteLine(myString.Length);
            Console.WriteLine(secondStr.ToUpper());
            Console.WriteLine(myString.ToLower());

            // Concatenation
            Console.WriteLine(myString + " " + secondStr);
            Console.WriteLine(string.Concat(myString, " I eat rice often!"));

            // Interpolation
            Console.WriteLine($"{myString} Did you know that {secondStr}");

            // String Access
            Console.WriteLine(myString[0]); // 'H'
            Console.WriteLine(myString.IndexOf("m")); // index: 6
            Console.WriteLine(secondStr.Substring(7)); // "turtles"

            // Escape characters
            Console.WriteLine("\\ \" \' \n \t \b"); // \n new line \t tab \b backspace
        }
    }
}