// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "~`!@#$%^&*()_+-={}[]|'.,<>/?";
var numbers = "0123456789";
var passwordLength;
const button = document.querySelector('button');
var askUpperCase;
var askLowerCase;
var askSpecialChar;
var askNumbers; 

// prompt box on button click to define password criteria
function chooseLength(){
 passwordLength = prompt("Choose a password length between 8 and 128 characters");
  if ((passwordlength < 8) || (passwordLength > 128)) {
    alert("Password must be between 8 and 128 characters");
    chooseLength();
  } else if (isNaN(passwordLength)){
    alert("Password length must be a number between 8 and 128");
    chooseLength();
  } 
  return passwordLength;
}

button.addEventListener('click', event=>{
  askUpperCase = confirm("Would you like to include uppercase letters?\n Select 'ok' for yes, or 'cancel' for no")
  askLowerCase = confirm("Would you like to include lowercase letters?\n Select 'ok' for yes, or 'cancel' for no")
  askSpecialChar = confirm("Would you like to include special characters?\n Select 'ok' for yes, or 'cancel' for no")
  askNumbers = confirm("Would you like to include numbers?\n Select 'ok' for yes, or 'cancel' for no")
});


// function to join criteria together into password
function buildPassword() {
  var passwordBuilder = [];
  var password = "";

  if(askUpperCase){
    for (var i of upperCase)
    passwordBuilder.push(i); 
  }
  if(askLowerCase){
    for (var i of lowerCase)
    passwordBuilder.push(i);
  }
  if(AskSpecialChar){
    for(var i of specialChar)
    passwordBuilder.push(i);
  }
  if(askNumbers){
    for(var i of numbers)
    passwordBuilder.push(i);
  }

  console.log("hello");
}


for (let i = 0; i < passwordLength; i++) {
  var rNum = Math.floor(Math.random() * chars.length);
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);