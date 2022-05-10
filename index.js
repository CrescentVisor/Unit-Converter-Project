
// Grabs the node element with the class of input-value and stores it in the variable const.
const value = document.querySelector(".input-value");

// Prompts user for an input value.
const userInput = prompt("Please Enter The Value To Be Converted");

/* Sets the text content of that node element to the user's input. 
If user refuses to input a value, the will input value set to zero.*/
if(userInput === null){
  value.textContent= "0";  
}
else{
  value.textContent = userInput;  
}

/* Converts the user's input to the coressponing unit and stores the the results of each conversion 
in a variable.*/
const convertedToMeters = Number(value.textContent) * 0.3048 ;

const convertedToFeet = Number(value.textContent) * 3.2808398950131;

const convertedToLiters = Number(value.textContent) * 3.7854118;

const convertedToGallons = Number(value.textContent) * 0.26417205;

const convertedToKilos = Number(value.textContent) * 0.45359237;

const convertedToPounds = Number(value.textContent) * 2.204623;

/* Grabs the node elements with the corresponding values and sets their text content 
to a string that includes the user's input as well as the converted value for every 
listed unit of measurement rouned to three decimal places.*/
const metersToFeet = document.querySelector(".meters-to-feet");
metersToFeet.textContent = `${value.textContent} meters = ${convertedToFeet.toFixed(3)} feet`;

const feetToMeters = document.querySelector(".feet-to-meters");
feetToMeters.textContent = `${value.textContent} feet = ${convertedToMeters.toFixed(3)} meters`;

const litersToGallons = document.querySelector(".liters-to-gallons");
litersToGallons.textContent =  `${value.textContent} liters = ${convertedToGallons.toFixed(3)} gallons`;

const gallonsToLiters = document.querySelector(".gallons-to-liters");
gallonsToLiters.textContent = `${value.textContent} gallons = ${convertedToLiters.toFixed(3)} liters`;

const kilsToPounds = document.querySelector(".kilos-to-pounds");
kilsToPounds.textContent = `${value.textContent} kilos = ${convertedToPounds.toFixed(3)} pounds`;

const poundsToKilos = document.querySelector(".pounds-to-kilos");
poundsToKilos.textContent = `${value.textContent} pounds = ${convertedToKilos.toFixed(3)} kilos`;

