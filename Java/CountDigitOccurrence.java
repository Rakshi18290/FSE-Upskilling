import java.util.Scanner;

public class CountDigitOccurrence {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = scanner.nextInt();

        System.out.print("Enter digit to count: ");
        int digit = scanner.nextInt();

        int count = 0;
        while (num != 0) {
            if (num % 10 == digit) {
                count++;
            }
            num /= 10;
        }

        System.out.println("Digit " + digit + " occurs " + count + " times.");
    }
}
