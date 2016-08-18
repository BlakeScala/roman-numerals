//Business Logic
function romanator(input) {
  console.log(input);
  var romanResult = "";
  var romanNumeral = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  for (var i = 0; i < numbers.length; i++) {
    while (input >= numbers[i]) {
      romanResult = romanResult + romanNumeral[i];
      input = input - numbers[i];
    }
  }
  return romanResult;
}
//User Logic
$(document).ready(function(){
  $("form").submit(function(event){
    $("#newRoman").detach();
    var userInput = parseInt($("#userInput").val());
    if (userInput > 3999 || userInput < 1) {
      $("#output").append('<p id="newRoman">' + "It's 476 AD; that number does not exist yet. Please enter a number between 1 and 3,999" + '</p>');
    } else if(userInput <= 3999 || userInput >= 1){
      var result = romanator(userInput);
      $("#output").append('<p id="newRoman">' + result + '</p>');
    } else {
      $("#output").append('<p id="newRoman">' + "That is not a number." + '</p>');
    }
    event.preventDefault();
  });
});
