let button = document.queryselector(".button");
let continueButton = document.querySelector(".continue");


let cardHolderName = document.querySelector(".cardHolderNameInput");
let cardHolderNumber = document.querySelector(".cardHolderNumberInput");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let cvc = document.querySelector(".cvc");

let backNumber = document.querySelector(".backNumber");
let cardNumber = document.querySelector(".frontnumber");
let cardName = document.querySelector(".name");
let monthCard = document.querySelector(".MM");
let yearCard = document.querySelector(".YY");

let inputs = document.querySelectorAll(".input");

let form = document.querySelectorAll(".form");
let thankyou = document.querySelectorAll(".center");

let numberError = document.querySelectorAll(".numberError");
let monthYearError = document.querySelectorAll(".monthYearError");
let cvcError = document.querySelectorAll(".cvcError");

button.addEventListener("click", function () {
    cardNameFun()
    cardNumberFun()
});

continueButton.addEventListener("click", function () {});


let cardNameFun = function(){
    if(inputs[0].value.match(/^[A-Za-z]+$/)){
        cardName.innerHTML =cardHolderName.value;
        inputs[0].style.borderColor = "hsl(270, 3%, 87%)";
        return true
    }else{
        cardName.innerHTML
        inputs[0].style.borderColor = "hsl(0, 100%, 66%)";
        return false
    }
}

let cardNumberFun = function(){
    if(inputs[1].value.match(/^\d+/) && cardHolderNumber.value.length === 16){
        cardNumber.innerHTML =cardHolderNumber.value.match(/.{1,4}/g).join("");
        inputs[1].style.borderColor = "hsl(270, 3%, 87%)";
        numberError.style.display = "none"
        return true
    }else{
        cardNumber.innerHTML
        inputs[1].style.borderColor = "hsl(0, 100%, 66%)";
        numberError.style.display = "flex"
        return false
    }
}