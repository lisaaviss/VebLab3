let previousButton = null;
let rButtonValue = 0;
function press() {
    let rates = document.getElementsByName('sendForm:r_value');
    let rate_value = null;
    for(let i=0; i<rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
        }
    }
    rButtonValue = rate_value;
    changeCanvas(rButtonValue);
}

function checkX(){
    let valX = document.querySelector('.x_Val').value;
    let check = valX !== "" && isFinite(valX) && valX <= 3 && valX >=-3;
    console.log(check);
    if (!check){
        alert('X must be between -3 and 3');
    }
}
function checkY(){
    let valY = document.querySelector('.y_Val').value;
    let check = valY !== "" && isFinite(valY) && valY <= 3 && valY >=-5;
    console.log(check);
    if (!check){
        alert('Y must be between -5 and 3');
    }
}
