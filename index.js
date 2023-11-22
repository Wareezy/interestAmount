//declaring all the variables 
let display=document.querySelector('[data-display]')
let display2=document.querySelector('[data-display2]')
let VAT=0.15

let btnMulti=document.querySelector('[data-calc]')

//function that will be performing the calculation
    function area(){
    let input= document.querySelector('[data-input]').value

    //backticks are used to access the variables and to display the data more neatly
    let answer=eval(`${input} *${VAT}`)
    let answer2=eval(`${input} +${answer}`)
    answer=answer.toFixed(2);
answer2=answer2.toFixed(2);
    //when displaying into a input tag you should use .value
    display.value=answer2
    display2.value=answer
}

//calling a click function. so that when the button is clicked that it accesses the area function
btnMulti.addEventListener('click',area)
document.querySelector("[data-display]").readOnly = true;
document.querySelector("[data-display2]").readOnly = true;