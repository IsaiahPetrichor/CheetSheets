public class Methods {
    // method that belongs to the methods class
    static int addNums(int x, int y) {
        return x + y;
    }

    // method overloading
    static float addNums(float x, float y) {
        return x + y;
    }

    // Main method
    public static void main(String[] args) {
        System.out.println(addNums(5, 58972));
        System.out.println(addNums(5.456f, 58972.2f));
    }
}
