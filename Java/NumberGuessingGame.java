import java.util.Scanner;
import java.util.Random;

public class NumberGuessingGame {
    public static void main(String[] args) {
        Random rand = new Random();
        int target = rand.nextInt(100) + 1;

        Scanner scanner = new Scanner(System.in);
        int guess = 0;

        System.out.println("Guess a number between 1 and 100:");

        while (guess != target) {
            guess = scanner.nextInt();

            if (guess < target) {
                System.out.println("Too low! Try again.");
            } else if (guess > target) {
                System.out.println("Too high! Try again.");
            } else {
                System.out.println("Congratulations! You guessed it!");
            }
        }
    }
}
