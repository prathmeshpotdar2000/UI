// public class DemoReverse
// {
//     public static void main(String[] args) {
//         String str = "Hello";

//         String reverse = "";
//         int len = str.length();

//         for (int i = 0; i < len; i++) {
//             reverse = str.charAt(i)+reverse;
//             System.out.println(reverse);
//         }
//     }
// }
//==================================but ^^^ above code has O(n^2) time complexity===============================

public class DemoReverse
{
    public static void main(String[] args) {
        String str = "Hello";
        StringBuilder reverse = new StringBuilder();

        for (int i = str.length()-1; i >=0; i--) {
            reverse.append(str.charAt(i));
        }
        System.out.println(reverse.append('a'));
        
    }
}
//================================== ^^^ above code has O(n) time complexity and that is very efficient compare to last one===============================
