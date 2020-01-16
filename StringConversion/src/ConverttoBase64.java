import java.math.BigInteger;
import java.util.Base64;

public class ConverttoBase64 {

    public static String base16to64(String hex) {
        return Base64.getEncoder().encodeToString(new BigInteger(hex, 16).toByteArray());
    }

    public static void main(String args[]) {
        ConverttoBase64 converttoBase64 = new ConverttoBase64();
        String base64Value = converttoBase64.base16to64("45766964696e74");
        System.out.println("Base64 string is " + base64Value);
    }
}
