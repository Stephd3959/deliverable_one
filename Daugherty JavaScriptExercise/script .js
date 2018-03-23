<script type="text/javascript">
//exercise 1		
//Prompt user for a number. Write a for loop that will add all the numbers leading up to that number, and inclusive of that number together and log the result to the console.	
		
//Prompt user for a number.		
		var i =prompt("Pick a number");	
		var sum = 0 //counter
//for loop that will add all the numbers leading up to that number, and inclusive of that number 
		for (var j = 1; j <= i; j++){
		 	sum+=j;	
				
		}
		//log the result to the console
			console.log("Output: "+ sum);
		
//exercise 2

//write a do while loop that builds a string with multiple inputs from a user. Start by prompting the user if they want to play. When the user answers yes, prompt the user to enter a word. After the user enters a word prompt the user if they would like to play again. if no consol log thier word. if yest prompt the user for another word and add that word to the original string, then prompt if they want to play again. continue to add words to the string every time the user answers yes and enters a word until the user indicates that he or she does not want to play anymore.
	


	//prompt user to play
	var wantToPlay= prompt("Do you want to play a game?");
	//if user says yes then run code to enter a word.
		if (wantToPlay =="yes") 
			do{
				var input = prompt ("Enter a Word");
				//store the input in an array
				let output = [];
								{
					output.push(input);//add the new input into array called output
				 console.log(output);}
				 var wantToPlayAgain = prompt("Do you want to play again?");
	
				}while (wantToPlayAgain == "yes");
		else		
			prompt ("Thank you for answering my question");
		
//exerise 3

//Write a while loop that will prompt the user if they would like to print their name, if the andwer is yes log their name to the councols then prompt them if they would like to print thier name again. if yes, log their name to the console angain but this time add an exclamation point at the end of the string. contigue to add an exclamation point for every time the user agree to print his name.	
		
//Prompt user for name.	
		
		//how do you 
		var x = 0;
		
		var invite = prompt("Would you like to print your name?");
		while (invite =="yes"); {
						
		var name = prompt("What is your name");
		
			var x = "!"; 
			}
		
		
		console.log("Hello "+ name + x);

//exercise 4

 //Prompt the user for a time of day (morning, noon, or evening). Based on their input, log a string to the console that will let the user know what they should be eating for that specific meal. Use the tables below to guide your logic.
	 
	 var timeOfDay = prompt ("What time of day is it?");
	 
	
	
switch (timeOfDay) {
    case "morning":
        console.log("Since it is morning, you should be eating breakfast. We suggest eggs and toast.");
        break;
    case "noon":
        console.log("Since it is noon, you should be eating lunch, Have a salad.");
        break;
    case "evening":
        console.log("Since it is evening, you should be eating dinner. We suggest chicken and rice.");;
        break;
    default:
        console.log("this is the default value, I cannot make a suggestion for you")
		
}		
		
	</script>