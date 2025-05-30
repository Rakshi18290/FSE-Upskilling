import java.util.HashMap;
import java.util.Scanner;

public class StudentMap {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, String> map = new HashMap<>();

        System.out.println("Enter student ID and name (type -1 to stop):");
        while (true) {
            int id = sc.nextInt();
            if (id == -1) break;
            sc.nextLine(); // consume newline
            String name = sc.nextLine();
            map.put(id, name);
        }

        System.out.print("Enter an ID to search: ");
        int searchId = sc.nextInt();
        System.out.println("Student Name: " + map.getOrDefault(searchId, "Not found"));
    }
}
