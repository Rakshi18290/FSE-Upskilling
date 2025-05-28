import java.util.concurrent.*;
import java.util.*;

public class CallableExample {
    public static void main(String[] args) throws Exception {
        ExecutorService executor = Executors.newFixedThreadPool(3);

        Callable<String> task = () -> {
            Thread.sleep(1000);
            return "Task completed";
        };

        List<Future<String>> results = executor.invokeAll(Arrays.asList(task, task, task));
        for (Future<String> f : results) {
            System.out.println(f.get());
        }

        executor.shutdown();
    }
}
