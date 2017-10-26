# SignalPath, LLC.
## QA Engineer Code Assessment

Please rank each of the following tools, languages and frameworks on a 4 point scale, where 1 = "I’ve been paid to write production-quality code with it." and 4 = "I could write the equivalent of a Hello World web application if I had a tutorial."
* JQuery -4
* Python -4
* Cucumber -4
* Scala -4
* Selenium -3
* Puppet -4
* Rspec -4
* Node.js -4
* Ruby -4
* Watir -4
* Java -4
* Jenkins -4
* Chef -4

1.  SignalPath has bought a new vending machine and it is going to be under heavy usage (we love snacks). You have been nominated to test it and make sure it is up to the task. How would you approach this?
  1. Make sure that the machine does not work when not plugged up.
  2. Make sure when it is plugged up that all the lights for each snack lights up and also the slots to enter in the currency lights up
  3. Make sure that different dollars amount works and the correct change is given.
  4. Make sure that enter in the correct coins also work: quaters, dimes, nickles and even see if it accepts pennies(which it should not)
  5. Then check to see if the currency is correct and that when the button selected for the snack works and the user gets the correct item selected.
  6. Make sure that if faked currency is used that the machine does not give the user the snack item whether is it coins or dollars.
  7. Make sure that when the machine is unplugged that none of the sncks get dispensed when selecting any buttons.
  
2.  Create two test cases for Twitter’s authentication functionality.
  1. Enter in all of the required fields to setup the twitter account. Submit the information - The twitter account is completed
  2. Enter in some of the required fields to setup the  twitter account - Submit the information - A message is displayed that all fields are required to create the account.
  
3.  Using any tool of your choice, create an automated test for one of the two test cases from the previous question (Twitter); or if your scripting knowledge is limited, discuss how you would go about testing the test case using automation.
  1. First I would verify that the test case can be automated
  2. Automate test cases that test the function of the code that was previously ran, like regression testing that makes sure that the functions of the application still works.

4.  Suppose you have a web site with two form elements on it: a multi-line textarea and button that says “multiply”. The expected behavior is that when you click “multiply” all of the numbers written in the textarea are multiplied together and written next to the textarea. For instance, if the textarea has the numbers 5, 7, 11 then the output will be 385. Identify all the test cases that you would need to write. (You do not actually need to write the detailed steps for every test case, just the summary.)
  1. Verify when a user enters in any values into the textarea and selects the multiply button that the numbers that are entered equals the final multiplied amount displayed in the output.
