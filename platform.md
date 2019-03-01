# SignalPath, LLC.
## Platform Engineering Code Assessment
1. Rank each of the following languages and frameworks on a 4 point scale, where 1 = "I've been paid to write production quality code with it." and 4 = "I could write a Hello World web application if I had a tutorial."
  * JQuery 2
  * Python 
  * PHP 4
  * Scala 3
  * Clojure 4
  * Haskell 4
  * Golang 2
  * Node.js 3
  * Ruby 4
  * Perl 3
  * Java 1
  * Angular 4
  * Chef. 4
1. In any language of your choice, write a utility that will translate a hexadecimal string to base64. Here's a test: this string `45766964696e74` should be converted into this string `RXZpZGludA== `.

public class HexToBase64Translator
{

    private static char[] base64Table = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
            'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g',
            'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
            'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '/'};


    public static void main(String args[])
    {

        HexToBase64Translator hexxie = new HexToBase64Translator();
        String inputString = "";
        if (args.length > 0)
        {
            inputString = args[0];
        }

        System.out.println(hexxie.translate(inputString));
    }

    public String translate(String hexInput)
    {
        String outputString = "This input could not be translated.";

        StringBuilder binaryBuilder = new StringBuilder();
        StringBuilder base64Builder = new StringBuilder();

        try
        {
            if ((hexInput != null) || (!hexInput.equals("")))
            {

                for (int i = 0; i < hexInput.length(); i++)
                {
                    if ((i == hexInput.length() - 1) && (hexInput.length() % 2 == 1))
                    {
                        binaryBuilder.append("0000");
                    }

                    String hexToBinary = Integer.toBinaryString(Integer.parseInt(hexInput.substring(i, i + 1), 16));
                    binaryBuilder.append("0000".substring(hexToBinary.length()) + hexToBinary);
                }

                while (binaryBuilder.length() >= 6)
                {
                    base64Builder.append(base64Table[Integer.parseInt(binaryBuilder.substring(0, 6), 2)]);
                    binaryBuilder.delete(0, 6);
                }

                if (binaryBuilder.length() > 0)
                {
                    base64Builder.append(base64Table[Integer.parseInt(binaryBuilder + "000000".substring(0, 6 - binaryBuilder.length()), 2)]);
                    base64Builder.append("==".substring(0, (6 - binaryBuilder.length()) / 2));
                }
            }
            outputString = base64Builder.toString();
        }
        catch (NumberFormatException nfe)
        {
        }

        return outputString;
    }
}

1. Download this [simple Python script](https://github.com/SignalPath/CodeTests/blob/master/specialMath.py). When you run it from the command line, it takes one parameter. So `$> python specialMath.py 7` will produce `79`. Also, `$> python specialMath.py 17` will produce `10926`. This question has two parts: first, convert it to Scala; second, have the script calculate `$> specialMath 90`.

object Main extends App {
	if (args.length != 0) {
        println(specialMathMethod(args(0).toInt))
    }
  
  def specialMathMethod(n: Int): Int =
  if (n == 0) 0 
  else if (n == 1) 1 
  else n + specialMathMethod(n-1) + specialMathMethod(n-2)
}

I'm not sure how long it will take to calculate specialMath 90 but it has been over an hour and it's still running, so a long, long time!


