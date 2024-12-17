let val = document.getElementById("value");
const decrease=document.getElementById("decrease");
const reset=document.getElementById("reset");
let num = 0

document.getElementById("increase").addEventListener("click",function(){
	
	num+=1
	val.textContent=num
})
document.getElementById("decrease").addEventListener("click",function(){
	
	num-=1
	val.textContent=num
})
document.getElementById("reset").addEventListener("click",function(){
	
	num=0
	val.textContent=num
})
