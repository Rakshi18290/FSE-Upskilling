public class TypeCastingExample {
    public static void main(String[] args) {
        double doubleVal = 9.99;
        int intVal = (int) doubleVal;

        System.out.println("Double: " + doubleVal);
        System.out.println("After casting to int: " + intVal);

        int intNum = 7;
        double doubleNum = intNum;

        System.out.println("Int: " + intNum);
        System.out.println("After casting to double: " + doubleNum);
    }
}
