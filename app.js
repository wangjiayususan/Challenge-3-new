// Assignment code here
var confirmCharacter="!#$%^&*_-+=(){}[];:'`~<,>.?/|@"
var confirmNumber="0123456789";
var confirmLowercase="abcdefghijklmnopqrstuvwxyz";
var confirmUppercase= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordlengthCheck;
var lowercaseCheck;
var numberCheck;
var specialCheck;
var generateBtn = document.querySelector("#generate");

//Function used to determine the password length
function determineLength() {
    passwordlengthCheck=prompt("How many characters would you like your password to have? (between 8 and 128 characters): ");
  
      if (passwordlengthCheck<8){
        alert("Password must be at least 8 characters!");
        determineLength();
        return passwordlengthCheck;

      }else if (passwordlengthCheck>128){
        alert("Password must be no more than 128 characters!");
        determineLength();
        return passwordlengthCheck;
      }
  }

//Function used to determine whether include lowercase in the password
function determineLowercase(){
    lowercaseCheck=prompt("Do you want to include lowercase characters? (Type 'Yes or No') ");
      lowercaseCheck=lowercaseCheck.toUpperCase();
  
      if (lowercaseCheck==="Yes"){
        alert("Yes or No");
        determineLowercase();
        lowercaseCheck=true;
        return lowercaseCheck;
  
      }else if (lowercaseCheck==="No"){
        alert("Yes or No");
        determineLowercase();
        lowercaseCheck=false;
        return lowercaseCheck;
      }
  }

//Function used to determine whether include numbers in the password
function determineNumbers(){
    numberCheck=prompt("Do you want to include numbers? (Type 'Yes or No') ");
      numberCheck=numberCheck.toUpperCase();
  
      if (numberCheck==="Yes"){
        alert("Yes or No");
        determineNumbers();
        numberCheck=true;
        return numberCheck;
  
      }else if (numberCheck==="No"){
        alert("Yes or No");
        determineNumbers();
        numberCheck=false;
        return numberCheck;
      }
  }

//Function used to determine whether include special characters in the password
function determineSpecial(){
    specialCheck=prompt("Do you want to include special characters? (Type 'Yes or No') ");
      specialCheck=specialCheck.toUpperCase();
  
      if (specialCheck==="Yes"){
        alert("Yes or No");
        determineSpecial();
        specialCheck = true;
        return specialCheck;
  
      }else if (specialCheck==="No"){
        alert("Yes or No");
        determineSpecial();
        specialCheck = false;
        return specialCheck;
      }
  }

//All the inputs from the previous functions were used to generate a password using a random number generator

function generatePassword(){
    determineLength();
    determineLowercase();
    determineNumbers();
    determineSpecial();
  
  var characters=confirmUppercase;
  var password="";

  if (lowercaseCheck&&numberCheck&&specialCheck){ 
    characters+=confirmLowercase+confirmNumber+confirmCharacter;

  }else if (numberCheck && specialCheck){
    characters+=confirmNumber+confirmCharacter;

  }else if (lowercaseCheck&&numberCheck){
    characters+=confirmLowercase+confirmNumber;
  
  }else if (lowercaseCheck&&specialCheck){
    characters+=confirmLowercase+confirmCharacter;
  
  }else if (lowercaseCheck){
    characters+=confirmLowercase;
  
  }else if (specialCheck){
    characters+=confirmCharacter;

  }else if(numberCheck){
    characters+=confirmNumber;
  
  }else{
    characters===confirmUppercase;
  }
  
    for(var i = 0; i < passwordlengthCheck; i++){
      password += characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return password;
  }
  
// Write password to the #password input
function writePassword() {
    var password="";
    password=generatePassword();
    var passwordText=document.querySelector("#password");
    passwordText.value=password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);