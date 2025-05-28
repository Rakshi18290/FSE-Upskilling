import java.util.Scanner;

public class CountDigits {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        int count = 0;
        while (num != 0) {
            count++;
            num /= 10;
        }

        System.out.println("Number of digits: " + count);
    }
}
