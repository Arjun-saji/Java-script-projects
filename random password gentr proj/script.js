const password = document.getElementById("password");
const copy=document.getElementById('copy');

function generatepassword(){
  const characters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{|\/><=-`~[]";
  let password='';

  for(i=0;i<8;i++){
    randomindex=Math.floor(Math.random() * characters.length)
    password+=characters[randomindex];
  }
  return password
}


document.getElementById("btn").addEventListener("click",function(){
  let newpass=generatepassword()
  password.value=newpass;
})

copy.addEventListener("click",()=>{

  const passwordCopy = password.value.trim();
  if(!passwordCopy){
    alert("No password to copy! Please generate a password first.");
    return;
  }


  navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("Password copied to clipboard!");
    });

});