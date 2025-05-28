import java.util.Scanner;

public class ArmstrongChecker {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = scanner.nextInt();
        int original = num;
        int sum = 0;
        int n = String.valueOf(num).length();

        while (num != 0) {
            int digit = num % 10;
            sum += Math.pow(digit, n);
            num /= 10;
        }

        if (original == sum) {
            System.out.println("Armstrong number!");
        } else {
            System.out.println("Not an Armstrong number.");
        }
    }
}
