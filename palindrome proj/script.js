

function isPlaindrome(str){

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g,'');
    console.log(cleanStr);

    const reversedStr = cleanStr.split('').reverse().join('');
    console.log(reversedStr);

    return cleanStr === reversedStr;
}
const inputText = document.getElementById("inputText");
const result = document.getElementById("result");

document.getElementById('checkButton').addEventListener("click",function(){

     if(isPlaindrome(inputText.value)){
        result.textContent=`${inputText.value} is a palindrome`
    }
    else{
        result.textContent=`${inputText.value} is a not palindrome`
    }
});