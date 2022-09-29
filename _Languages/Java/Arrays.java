public class Arrays {
    public static void main(Strings[] args) {
        // Simple array, arrays are of one Type and have a set length
        int[] numbers = {1, 2, 3, 4, 5};
        // Arrays are zero indexed
        int thirdElement = numbers[2];
        System.out.println(thirdElement);

        // Change element in an array
        numbers[0] = 100;

        // Length of array
        System.out.println(numbers.length);

        // Multidimentional arrays
        int[][] matrix = {{0, 0, 1}, {0, 1, 0}, {0, 0, 0}};
        System.out.println(matrix);
    }
}
