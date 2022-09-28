public class Strings {
    public static void main(String[] args) {
        String sample = "ASdjfiewnmasdKASfsdkfghjasd SADFgje ASdjkfgeopjs";

        // Strings have many built in methods
        System.out.println("Starting string: " + sample);

        System.out.println(sample.length());
        System.out.println(sample.toUpperCase());
        System.out.println(sample.toLowerCase());
        // Many more in references

        // String concatenation
        System.out.println(sample + " " + "another string");
        System.out.println(sample.concat(" another string"));

        // when adding a number to the string, it type casts itself to a string
        System.out.println(sample + 12785);
        // this will output "11" not '2'
        System.out.println("1" + 1);

        // Escape characters
        /*
            \'	'	Single quote
            \"	"	Double quote
            \\	\	Backslash
            \n	New Line	
            \r	Carriage Return	
            \t	Tab	
            \b	Backspace	
            \f	Form Feed

        */

        // single quotes do not need escaped if double quotes are used
        System.out.println("Hello apples' \"\\\\ ");

        // Print out formatted strings to input variables directly
        String name = "Isaiah";
        System.out.printf("Hello %s, This is your computer speaking.", name);
    }
}
