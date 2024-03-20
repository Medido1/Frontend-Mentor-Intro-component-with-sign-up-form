const myForm = document.querySelector(".form");
const inputs = myForm.querySelectorAll("input");
const divs = myForm.querySelectorAll("div");
const errorMsgs = myForm.querySelectorAll(".error_msg");
const errorIcons = myForm.querySelectorAll(".error_icon");

function showError(index){
  divs[index].classList.add("error");
  errorMsgs[index].classList.add("error");
  errorIcons[index].classList.add("error");
  inputs[index].placeholder = "";
  if (inputs[index].type === "email"){
    inputs[index].placeholder="email@example/com";
    inputs[index].classList.add("red");
  }
}

function removeError(index){
  divs[index].classList.remove("error");
  errorMsgs[index].classList.remove("error");
  errorIcons[index].classList.remove("error");
}

function isValidEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input, index) => {
    if (input.value.trim() === ""){
      showError(index);
    }
    else if (input.type === "email" && !isValidEmail(input.value)){
      showError(index);
    }
    else {
      removeError(index);
    }
  })
})

function handleInputBlur(index){
  if(inputs[index].value.trim() === ""){
    showError(index);
  }
  else if (inputs[index].type === "email" && !isValidEmail(inputs[index].value)){
    showError(index);
  }
}

inputs.forEach((input, index)=> {
  input.addEventListener("focus", () => removeError(index));
  input.addEventListener("blur", () => handleInputBlur(index));
})

