namespace c_sharp
{
    internal class Classes
    {
        // fields are private by default
        // 'readonly' means it cannot be changed

        private readonly string Name;
        private readonly string Instructor;
        private readonly int NumStudents;

        public Classes(int numStudents, string name, string instructor)
        {
            Name = name;
            Instructor = instructor;
            NumStudents = numStudents;
        }

        public void PrintClass()
        {
            Console.WriteLine($"Class: {Name}\nInstructor: {Instructor}\nNumber of Students: {NumStudents}");
        }
    }
}