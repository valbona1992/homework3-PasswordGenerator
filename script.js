// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function to generate password with prompts for the user to select multiple password criteria

function generatePassword() {
  let passwordLength = prompt("How many characters would you like your password to be ?");

  // Alerts if the password did not meet the length criteria
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please select a password length of at least 8 characters and no more than 128 characters!");
    return "";
  }

  let specialCharacters = confirm("Click OK to confirm using special characters");
  let numericCharacters = confirm("Click OK to confirm using numeric characters");
  let lowercaseCharacters = confirm("Click OK to confirm using lowercase characters");
  let uppercaseCharacters = confirm("Click OK to confirm using uppercase characters");

  // Alert if no criteria was selected.
  if (!specialCharacters && !numericCharacters && !lowercaseCharacters && !uppercaseCharacters) {
    alert("Please select at least one character type!");
    return "";
  }
  // Variables for the criterias including numbers, special characters, lowercase characters, and uppercase characters.
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let special = ["!",'"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-",".", "/", ":", ";", "<", "=", ">", "?", "@", "[", '\\', ']', "^", '_', "`", "{", "|", "}", "~" ];
  let lowercase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
  let uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

  let validChoices = [];

  if (specialCharacters){
    validChoices = validChoices.concat(special);
  } 

  if (numericCharacters) {
    validChoices = validChoices.concat(numbers);
  }

  if (lowercaseCharacters) {
    validChoices = validChoices.concat(lowercase);
  }

  if (uppercaseCharacters) {
    validChoices = validChoices.concat(uppercase);
  }

  // Loop that runs for the duration of the password length provided by the user, given the selected random characters 
  let password = "";
  for (let i =0; i < passwordLength; i++) {
    let myrandom = Math.floor (Math.random () * validChoices.length);
    password += validChoices[myrandom];
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



