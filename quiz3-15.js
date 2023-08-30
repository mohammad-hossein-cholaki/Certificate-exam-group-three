/*
Password Validation
Check the input password length is greater than 8 characters and the password doesn't contain this characters (" (space),@,#,$")

Examples:
validationPassword("123456") => Your password is not valid
validationPassword("123cvb789") => Your password is valid
validationPassword("abc 1147") => Your password is not valid
validationPassword("abc!@dfgd") => Your password is not valid
*/

function validationPassword(password) {
  // Your code goes below this line
  if(password.length>8){
    if(password.indexOf(' ')==-1 && password.indexOf('@')==-1 && password.indexOf('#')==-1 && password.indexOf('$')==-1 ){
      
      console.log('Your password is valid')

    }else{
      console.log('Your password is not valid')

    }
  }else{
    console.log('Your password is not valid')

  }
  // Your code goes above this line
}

// Don't modify code below this line.
function assert(text1, text2) {
  if (text1 === text2) {
    console.log("PASSED");
  } else {
    throw new Error("FAILED: !Your result in not true");
  }
}

assert(validationPassword("123456"), "Your password is not valid");
assert(validationPassword("123cvb789"), "Your password is valid");
assert(validationPassword("abc 1147"), "Your password is not valid");
assert(validationPassword("abc!@dfgd"), "Your password is not valid");

// DON'T modify the code above this line
