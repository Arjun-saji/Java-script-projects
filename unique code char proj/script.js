
function getUnicodeCodes(str) {
    return [...str].map(char => char.charCodeAt(0));
}

function detectChar(){

    const input = document.getElementById("inputType");
    console.log(input);
    const result=document.getElementById("result")

    if (input){
        const demcar = getUnicodeCodes(input.value)
        console.log(demcar);
      result.textContent = `Unicode Codes: ${demcar.join(", ")}`;
    }
    else{

        result.textContent="It is not valid..!";
    }
}
