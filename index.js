
const evenMessage = "is  even.";
const oddMessage = "is odd.";
let number1= 5;
let number2 = 10;

function checkEvenOrOdd(num) {

    if (num % 2 === 0) {
  console.log("The number " + num + " " + evenMessage);
  
 } else {
  console.log("The number " + num + " " + oddMessage);

    }
}

checkEvenOrOdd(number1);

checkEvenOrOdd(number2);