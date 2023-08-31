const getcolor=()=>{
    //Hex code
    const randomnumber=Math.floor(Math.random()*16777215);
    const randomcode="#"+randomnumber.toString(16);
    console.log(randomnumber,randomcode);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("color-code").innerText=randomcode;
navigator.clipboard.writeText(randomcode);



}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
//initial call
getcolor();