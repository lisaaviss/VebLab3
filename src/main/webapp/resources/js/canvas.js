let r_value;
function canvasInit(coeff){
    let canvas = document.getElementById("cns");
    canvas.addEventListener('mousedown', event => shoot(canvas, event));
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#d8e2dc';
    ctx.globalAlpha = 1.0;
    ctx.fillRect(0, 0, width, height);
    r_value = coeff;
    drawAxis(ctx,width,height,coeff);
    drawText(ctx,width,height);
}

function drawAxis(ctx,width,height,coeff){
    //rec
    ctx.beginPath();
    ctx.moveTo(65+(3-coeff)*30,height/2);
    ctx.lineTo(65+(3-coeff)*30, height-(3-coeff)*30 - 65);
    ctx.lineTo(width/2, height-(3-coeff)*30 - 65);
    ctx.lineTo(width/2, height/2);
    ctx.closePath();
    ctx.strokeStyle = "#7E9F8B";
    ctx.fillStyle = "#7E9F8B";
    ctx.fill();
    ctx.stroke();

    //arc
    ctx.beginPath();
    ctx.moveTo(width/2,height/2);
    ctx.arc(width/2,height/2,coeff*30,Math.PI, 1.5*Math.PI,false);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //triangle
    ctx.beginPath();
    ctx.moveTo(width/2,height/2+30*coeff/2);
    ctx.lineTo(width/2, height/2);
    ctx.lineTo(width/2+30*coeff, height/2);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    //Y
    ctx.beginPath();
    ctx.moveTo(width/2,0);
    ctx.lineTo(width/2, height);
    ctx.closePath();
    ctx.strokeStyle = "black";
    ctx.stroke();

    //X
    ctx.beginPath();
    ctx.moveTo(0,height/2);
    ctx.lineTo(width, height/2);
    ctx.closePath();
    ctx.stroke();

}

function drawText(ctx,width,height){
    ctx.font = "bold 7.5px Verdana";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.fillText("5",width/2+2.5,7.5);
    ctx.fillText("4",width/2+2.5,35);
    ctx.fillText("3",width/2+2.5,65);
    ctx.fillText("2",width/2+2.5,95);
    ctx.fillText("1",width/2+2.5,125);

    ctx.fillText("-1",width/2+2.5,185);
    ctx.fillText("-2",width/2+2.5,215);
    ctx.fillText("-3",width/2+2.5,245);
    ctx.fillText("-4",width/2+2.5,275);
    ctx.fillText("-5",width/2+2.5,305);

    ctx.fillText("0",width/2+2.5,height/2+10);

    ctx.fillText("-5",5,height/2+10);
    ctx.fillText("-4",35,height/2+10);
    ctx.fillText("-3",65,height/2+10);
    ctx.fillText("-2",95,height/2+10);
    ctx.fillText("-1",125,height/2+10);
    ctx.fillText("1",185,height/2+10);
    ctx.fillText("2",215,height/2+10);
    ctx.fillText("3",245,height/2+10);
    ctx.fillText("4",275,height/2+10);
    ctx.fillText("5",302.5,height/2+10);
}
function shoot(canvas, event){
    if (rButtonValue!==0){
        let x = event.offsetX;
        let y = event.offsetY;

        let fakeX = document.getElementsByClassName('fakeX')[0];
        let fakeY = document.getElementsByClassName('fakeY')[0];
        let fakeR = document.getElementsByClassName('fakeR')[0];
        let fakeButton = document.getElementsByClassName('fakeButton')[0];
        fakeX.value = ((x-155) / 30).toFixed(3);
        fakeY.value = ((155-y)/30).toFixed(3);
        fakeR.value = rButtonValue;
        console.log(fakeX.value, fakeY.value);
        fakeButton.click();
        event.preventDefault();
    }else{
        alert("Choose R firstly");
    }

}

function drawAllPointsForThisRadius(value) {
    let count = document.getElementById('results').rows.length - 1;
    let rows = document.getElementById('results').tBodies[0].rows;
    let canvas = document.getElementById("cns");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    let rvalue = parseFloat(value)
    for (let i=0;i<count;i++){
        let row = rows[i];
        let r = parseFloat(row.cells[2].innerText.replace(",", "."))
        if (r===rvalue){
            let x = width/2 + 30*parseFloat(row.cells[0].innerText.replace(",", "."));
            let y = height/2 - 30*parseFloat(row.cells[1].innerText.replace(",", "."));
            let result = row.cells[3].innerText;
            ctx.beginPath();
            ctx.arc(x,y,2.5,0, Math.PI*2);
            ctx.closePath();
            if (result==='true'){
                ctx.strokeStyle = "green";
                ctx.fillStyle = "green";
            }else{
                ctx.strokeStyle = "red";
                ctx.fillStyle = "red";
            }
            ctx.fill();
            ctx.stroke();
        }
    }
}

function changeCanvas(value){
    let canvas = document.getElementById("cns");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    ctx.strokeStyle = 'black';
    ctx.fillStyle = '#d8e2dc';
    ctx.globalAlpha = 1.0;
    ctx.fillRect(0, 0, width, height);
    r_value = value;
    drawAxis(ctx,width,height,value);
    drawText(ctx,width,height);
    drawAllPointsForThisRadius(r_value);
}

function drawPoint(){
    let count = document.getElementById('results').rows.length - 2;
    let row = document.getElementById('results').tBodies[0].rows;
    let x = parseFloat(row[count].cells[0].innerText.replace(",", "."));
    let y = parseFloat(row[count].cells[1].innerText.replace(",", "."));
    let result = row[count].cells[3].innerText;
    let canvas = document.getElementById("cns");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height  = canvas.height;
    let x_draw = width/2 + x*30;
    let y_draw = height/2 - y*30;
    ctx.beginPath();
    ctx.arc(x_draw,y_draw,2.5,0, Math.PI*2);
    ctx.closePath();
    if (result==='true'){
        ctx.strokeStyle = "green";
        ctx.fillStyle = "green";
    }else{
        ctx.strokeStyle = "red";
        ctx.fillStyle = "red";
    }
    ctx.fill();
    ctx.stroke();
}
