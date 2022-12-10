


let btn = document.getElementById("button");
let display = document.getElementById("canvas");

btn.addEventListener("click", ()=> {
    let s="0123456789ABCDEF";
    let str = "#"
    for(let i = 0; i<6; i++)
    {
        str += s.charAt(Math.random()*16)
    }
    console.log(str);
    display.style.background = str;
})
