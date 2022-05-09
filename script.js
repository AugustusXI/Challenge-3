// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "~`!@#$%^&*()_+-={}[]|'.,<>/?";
var numbers = "0123456789";

// prompt box on button click to define password criteria
function promptMe(){
var length = prompt("Choose a password length between 8 and 128 characters"){
  if (length<8) {
    alert("Password must be at least 8 characters")
    promptMe();
  }
}

var askupperCase = confirm("Would you like to include uppercase letters?")
var asklowerCase = confirm("Would you like to include lowercase letters?")
var askspecialChar = confirm("Would you like to include special characters?")
var asknumbers = confirm("Would you like to include numbers?")

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);