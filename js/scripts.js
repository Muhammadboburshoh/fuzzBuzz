var elForm = document.querySelector(".form")
var elNummber = elForm.querySelector(".input-nomber")
var elFizzNumber = document.querySelector(".fizz-length")
var elBuzzNumber = document.querySelector(".buzz-length")
var elFizzBuzzNumber = document.querySelector(".fizzbuzz-length")





elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();


  var fizz = [];
  var buzz = [];
  var fizzBuzz = [];

  var number = parseInt(elNummber.value.trim(),10)

  for (var i = 1; i <= number; i++) {
  
    if (i % 3 === 0 && i % 5 === 0){
      fizzBuzz.push(i);
    }
    else if (i % 3 === 0) {
      fizz.push(i);
    }
    else if (i % 5 === 0) {
      buzz.push(i);
    }
  }

  elFizzBuzzNumber.textContent = fizzBuzz.length;
  elFizzNumber.textContent = fizz.length;
  elBuzzNumber.textContent = buzz.length;


  console.log(fizz);
  console.log(buzz);
  console.log(fizzBuzz);

})



