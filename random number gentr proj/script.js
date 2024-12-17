
const genbuttn = document.getElementById("generate-btn");
const randomnumber= document.getElementById("random-number");

genbuttn.addEventListener("click",()=>{
   
   let num = Math.floor(Math.random()* 100); 
   randomnumber.textContent=num

})

