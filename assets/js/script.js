var generateBtn = document.querySelector("#generate")

function generatePassword() {

  // Establish the Password Parameters via Arrays
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var symbolArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"]

  var resultArray = []
  var userArray = []

  uppercaseArray[1]
  
  // Establish Window Prompts for User Input on Password Guidelines
  var numCharacter = window.prompt("How many characters would you like your password to contain? (8-128 Characters)")
  var symbols = window.confirm("Click OK to confirm including special characters. (!@#$%^&*(){}[]=<>/,.)")
  var numbers = window.confirm("Click OK to confirm including numbers.")
  var lowercase = window.confirm("Click OK to confirm including lowercase characters.")
  var uppercase = window.confirm("Click OK to confirm including uppercase characters.")

  // Set Conditionals
  if (numbers) {
    resultArray = resultArray.concat(numberArray)

  }

  if (uppercase) {
    resultArray = resultArray.concat(uppercaseArray)

  }

  if (lowercase) {
    resultArray = resultArray.concat(lowercaseArray)

  }

  if (symbols) {
    resultArray = resultArray.concat(symbolArray)
  }
  console.log(resultArray)


  for (var i = 0; i < numCharacter; i++) {
    userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)])
  }

  return userArray.join("")
}
// Write Password based on above results
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password")

  passwordText.value = password

}

generateBtn.addEventListener("click", writePassword)