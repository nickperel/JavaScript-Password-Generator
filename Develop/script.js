// Assignment code here
function generatePassword() {
  var basketCriteria = "";

  var inputLength = window.prompt(
    "How long would you like your password to be?"
  );
  if (inputLength >= 8 && inputLength <= 128) {
    var includeLowercase = window.confirm(
      "Would you like to include lowercase characters in your password?"
    );
    console.log(includeLowercase);

    var includeUppercase = window.confirm(
      "Would you like to include uppercase characters in your password?"
    );
    console.log(includeUppercase);

    var includeNumeric = window.confirm(
      "Would you like to include numeric characters in your password?"
    );

    var includeSpecial = window.confirm(
      "Would you like to include special characters in your password?"
    );
    if (includeLowercase || includeUppercase || includeNumeric || includeSpecial) {
      for (i = 0; i < inputLength; i++) {
        if (includeLowercase && basketCriteria.length < inputLength) {
          var randomNumber = Math.floor(Math.random() * 26 + 97);
          console.log(randomNumber);
          basketCriteria = basketCriteria + String.fromCharCode(randomNumber);
        }
  
        if (includeUppercase && basketCriteria.length < inputLength) {
          var randomNumber = Math.floor(Math.random() * 26 + 65);
          console.log(randomNumber);
          basketCriteria = basketCriteria + String.fromCharCode(randomNumber);
        }
  
        if (includeNumeric && basketCriteria.length < inputLength) {
          var randomNumber = Math.floor(Math.random() * 10 + 48);
          console.log(randomNumber);
          basketCriteria = basketCriteria + String.fromCharCode(randomNumber);
        }
  
        if (includeSpecial && basketCriteria.length < inputLength) {
          var randomNumber = Math.floor(Math.random() * 14 + 33);
          console.log(randomNumber);
          basketCriteria = basketCriteria + String.fromCharCode(randomNumber);
        }
      }
      return basketCriteria;
    } else {
      window.alert("Please enter at least one of the chraracter criteria that is required!")
      return "Error";
    }

  } else {
    window.alert(
      "Please folow the correct password criteria before proceeding."
    );
    return "Error";
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);

  var textArea = document.querySelector("#password");
  console.log("textArea Value; ", textArea.value);

  textArea.value = password;
  console.log("textArea Value; ", textArea.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
