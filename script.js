let button = document.queryselector(".button")
let continuebutton = document.querySelector(".continue")


let cardholdername = document.querySelector(".cardholdernameinput")
let cardholdernumber = document.querySelector(".cardholdernumberinput")
let month = document.querySelector(".month")
let year = document.querySelector(".year")
let cvc = document.querySelector(".cvc")

let backnumber = document.querySelector(".backnumber")
let cardnumber = document.querySelector(".frontnumber")
let cardname = document.querySelector(".name")
let monthcard = document.querySelector(".MM")
let yearcard = document.querySelector(".YY")

let inputs = document.querySelectorAll(".inputs")
let form = document.querySelectorAll(".form")
let thankyou = document.querySelectorAll(".center")

let numbererror = document.querySelectorAll(".numbererror")
let monthyearerror = document.querySelectorAll(".monthyearerror")
let cvcerror = document.querySelectorAll(".cvcerror")

button.addEventListener("click" , function(){
    cardnameFun()
})
continuebutton.addEventListener("click" , function(){})

let cardnameFun = function(){
    if(inputs[0].value.match(/^[A-Za-z]+$/)){
        cadrname.innerHTML =cardholdername.value;
        inputs[0].style.bordercolor = "hsl(270, 3%, 87%)";
        return true
    }else{
        cardname.innerHTML
        inputs[0].style.bordercolor = "red";
        return false
    }
}