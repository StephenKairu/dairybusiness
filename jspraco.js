var age = prompt("What's your age?")
function remTime {
var myAge= 23;
var remYears= 90-myAge;
var remMonths= remYears*12;
var remWeeks= remYears*52;
var remDays= remYears*365;
console.log("You have" + remMonths + "months" + remWeeks  + "weeks" + remDays + "days"  + "left");
}


function lifeInWeeks(age) {

    var remYears = 90 - age;
    var remMonths= remYears*12;
    var remWeeks= remYears*52;
    var remDays= remYears*365;

    console.log("You have" + remMonths + "months" + remWeeks  + "weeks" + remDays + "days"  + "left");

}

lifeInWeeks(12)


function bmi() {
    var weight = prompt ("What's your weight?(kg)");
    var height = prompt ("What's your height?");
    var bmi = weight / height;

}



function bmiCalculator(num1, num2) {
    var weight = num1;
    var height = num2;
    var bmi = num1 / (num2 * num2);
    console.log("Your BMI is" + bmi);
}

bmiCalculator(65, 1.8)

Love Calculator

function () {
    var yourName = prompt ("Your name");
    var crushName = prompt ("The name of your crush");
    n= Math.random() * 100;
    return
    console.log("Your name" + "The name of your crush" + result);
}
alert("Your name" + "The name of your crush" + result)


bmi

let userName = prompt("Please enter your Name.");
let userWeight = prompt("Please enter your weight.");
let userHeight = prompt("please enter your Height");

function testBmi(userWeight,userHeight ) {
        let bmiCalc = Math.round(userWeight / (userHeight** 2))
    return bmiCalc
    // asdsdjb,ks sud 
    // sfdsf
}

let bmiResult = testBmi(userWeight, userHeight)

function (bmiResult) {
    if (bmiResult< 18.5) {
        console.log("Your BMI is" + bmiResult + "so you are underweight.")
    }
    else { 
        if (bmiResult>=18.5)  
        console.log("Your BMI is" + bmiResult + "so you have a normal weight.")
    } else {
        if (bmiResult>24.9) {
            console.log("Your BMI is" + bmiResult + "so you are overweight.")
        }
    }
}


var count=1;
var output=[];
function fizzBuzz(){
  
   if((count % 3 === 0 && count% 5 === 0 )){
       output.push("fizzbuzz")
   }else if(count % 3 ===0){
       output.push("fizz")
   }
       
    else if(count% 5 === 0){
        output.push("buzz")
    }
    else{
        output.push(count)
    }
    
    count++;
  console.log(output)
     }
fizzBuzz();