
const getColor=()=>{
    // hex code
    // multiply with special number to get a number
    //  which is easily get converted to hexadecimal code
    const randomnumber= Math.floor(Math.random() * 16777215); 

    // concat "#" to random number and convert to hexadecimal
    const randomCode="#"+randomnumber.toString(16);

    document.getElementById("color-code").innerText=randomCode;
    // set hexcode as a color to the bacground color
    document.body.style.backgroundColor =randomCode;

    // copy the code to the clipboard while clicking
    navigator.clipboard.writeText(randomCode);
  
}

document.getElementById("btn").addEventListener('click', getColor);

getColor();
