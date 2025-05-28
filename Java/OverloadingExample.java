public class OverloadingExample {
    static int add(int a, int b) {
        return a + b;
    }

    static double add(double a, double b) {
        return a + b;
    }

    static int add(int a, int b, int c) {
        return a + b + c;
    }

    public static void main(String[] args) {
        System.out.println(add(3, 4));
        System.out.println(add(2.5, 4.5));
        System.out.println(add(1, 2, 3));
    }
}
