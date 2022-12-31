import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();

        List<List<Integer>> list = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            List<Integer> sublist = List.of(sc.nextInt(), sc.nextInt());
            list.add(sublist);
        }

        list.sort((a, b) -> {
            if (a.get(1).equals(b.get(1))) return a.get(0) - b.get(0);
            else return a.get(1) - b.get(1);
        });

        for (int i = 0; i < n; i++) {
            System.out.println(list.get(i).get(0) + " " + list.get(i).get(1));
        }
    }
}