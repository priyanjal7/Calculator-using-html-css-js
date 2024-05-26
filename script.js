let display = document.querySelector("main .calculator .display")
let buttons = document.querySelectorAll(".btn")
let allclear = document.querySelector(".btn.allclear")
let equal = document.querySelector(".zeroandequal .equal")
buttons.forEach(button=>{
    button.addEventListener("click",function(){
        display.textContent += button.textContent
    })
    

})
equal.addEventListener("click",function(){
    display.textContent = eval(display.textContent)
})
allclear.addEventListener("click",function(){
    display.textContent = ""
})
