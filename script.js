// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var specialChar = "~`!@#$%^&*()_+-={}[]|'.,<>/?";
var numbers = "0123456789";
var passwordLength;

// prompt box on button click to define password criteria
function passwordLength(){
let passwordLength = prompt("Choose a password length between 8 and 128 characters");{
  if (length<8) {
    alert("Password must be at least 8 characters");
    passwordLength();
  } else if (passwordLength>128) {
    alert("Password must be no more than 128 characters");
    passwordLength();
  } else if (isNaN(passwordLength))
    alert("Password length must be a number between 8 and 128");
    passwordLength();
  } 
  return passwordLength;
}

var askupperCase = confirm("Would you like to include uppercase letters?\n Select 'ok' for yes, or 'cancel' for no")
var asklowerCase = confirm("Would you like to include lowercase letters?\n Select 'ok' for yes, or 'cancel' for no")
var askspecialChar = confirm("Would you like to include special characters?\n Select 'ok' for yes, or 'cancel' for no")
var asknumbers = confirm("Would you like to include numbers?\n Select 'ok' for yes, or 'cancel' for no")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);