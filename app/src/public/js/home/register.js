"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  confirmPsword = document.querySelector("#confirm-psword"),
  registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if(!id.value) return alert("go id");
  if (psword.value === confirmPsword.value) return alert("invalide_psword");

  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
  };
  console.log(JSON.stringify(req));

  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("registering error!"));
      //console.error("registering error!") 이렇게도 할수 있다. 둘중하나 선택
    });
}
