const spanelement=document.getElementById("spancontent");
document.getElementById("name").addEventListener("click", function(){
      
    const nm = prompt("Enter the Name");
    // console.log(`Hello ${nm}`)
    spanelement.textContent=nm;



})