import java.util.Scanner;

public class LCM {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter first number: ");
        int a = scanner.nextInt();

        System.out.print("Enter second number: ");
        int b = scanner.nextInt();

        int gcd = 1;
        int min = Math.min(a, b);

        for (int i = 1; i <= min; i++) {
            if (a % i == 0 && b % i == 0) {
                gcd = i;
            }
        }

        int lcm = (a * b) / gcd;
        System.out.println("LCM is: " + lcm);
    }
}
