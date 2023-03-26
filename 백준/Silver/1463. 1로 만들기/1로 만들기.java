import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	private static Integer[] memo;

	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int n = Integer.parseInt(br.readLine());
		memo = new Integer[n + 1];
		memo[0] = memo[1] = 0;

		System.out.println(topDown(n));

	}

	private static int topDown(int n) {

		if (memo[n] == null) {
			if (n % 2 == 0 && n % 3 == 0){
				memo[n] = 1 + Math.min(Math.min(topDown(n / 2), topDown(n / 3)), topDown(n - 1));
			} else if (n % 2 == 0 && n % 3 != 0) {
				memo[n] = 1 + Math.min(topDown(n / 2), topDown(n - 1));
			} else if (n % 2 != 0 && n % 3 == 0) {
				memo[n] = 1 + Math.min(topDown(n / 3), topDown(n - 1));
			} else  {
				memo[n] = 1 + topDown(n - 1);
			}
		}

		return memo[n];
	}
}
