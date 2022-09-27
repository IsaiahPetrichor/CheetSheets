public class Loops {
    public static void main(String[] args) {
        // While loops
        int i = 0;
        while (i < 5) {
            // do something
            i++;
        }

        // do/while
        do {
            // something once no matter what
            i++;
        }
        while (i < 10);

        // for loop
        for (int j = 0; i < 10; i++) {
            System.out.println(j);
        }

        // for each
        int[] numbers = {0, 1, 2, 3, 4};
        for (int j : numbers) {
            // break
            if (j == 3) break;
            // continue
            if (j < 1) continue;
            System.out.println(j);
        }
    }
}
