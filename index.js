let button=document.querySelectorAll("button");
let input = document.getElementById("inputBox");

button.forEach((element)=>{
    element.addEventListener("click",(e)=>{
        // let btnClick=e.target.textContent;
        // console.log(btnClick);

        if (e.target.textContent.trim() ==="C"){
            console.log("hello")
            input.innerText="";
        }
        else if (e.target.textContent.trim()==="<"){
                input.innerText=input.innerText.slice(0,-1);
        }
        else if (e.target.textContent.trim() === "="){
            input.innerText = eval(input.innerText);  
        }
        else{
            input.innerText += e.target.textContent;
        }

        input.scrollLeft=input.scrollWidth;
    })
})

