
function isPrime(num) {
  // Handle edge cases
  if (num <= 1) return false;
  if (num === 2) return true; // 2 is a prime number
  if (num % 2 === 0) return false; // eliminate even numbers greater than 2

  // Check for factors up to the square root of the number
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
}

const message = document.getElementById("resultMessage");
let num = document.getElementById("numberInput");
document.getElementById("checkButton").addEventListener("click",function(){
  let no = parseInt(num.value)
  let ans= isPrime(no);

  if(ans){
    message.textContent="prime Number"
  }
  else{
    message.textContent="Not prime Number"
  }
})

