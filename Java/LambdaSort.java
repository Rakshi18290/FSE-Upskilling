import java.util.ArrayList;
import java.util.Collections;

public class LambdaSort {
    public static void main(String[] args) {
        ArrayList<String> names = new ArrayList<>();
        names.add("Zara");
        names.add("Bob");
        names.add("Alice");

        Collections.sort(names, (a, b) -> a.compareToIgnoreCase(b));
        names.forEach(System.out::println);
    }
}
