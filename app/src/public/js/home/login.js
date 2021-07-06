"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: psword.value,
    };
    console.log(JSON.stringify(req))
    fetch("/login",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req)
    })
    .then((res)=> res.json())
    .then((res)=> {
        if (res.success){
            location.href = "/";
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error(new Error("logining error!"))
        //console.error("logining error!") 이렇게도 할수 있다. 둘중하나 선택 
    });
}