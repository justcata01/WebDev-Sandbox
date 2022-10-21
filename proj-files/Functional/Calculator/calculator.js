var number0 = 0;
var number1 = 0;

var summedNumbs = 0;


var stringnumber0 = "0";
var stringnumber1 = "";

var stringDisplay = "0";

var nextNumber = false;
var selected = false;
var equation = "nothing"; /* nothing / sum 10/ sub 11/ mult 12/ div 13*/
var stringEquation = "";

function buttonPressed(keyPressed)
{
    if(keyPressed <= 9)
    {
        if(number0 == 0){
            stringnumber0 = keyPressed;
            selected=true;
        }
        else{
        
            if(nextNumber == false){
                stringnumber0 += keyPressed.toString();
            }
            else{
                if(number1 != 0){
                    /* bruh */
                    stringnumber1 += keyPressed.toString();
                    selected=true;
                }
            }
            
        }
    }
    else{
        if(selected == true)
        {
            switch(keyPressed){
                case 10:  equation = "sum"; stringEquation = "+"; nextNumber = true; break;
                case 11:  equation = "sub"; stringEquation = "-"; nextNumber = true; break;
                case 12:  equation = "mult"; stringEquation = "×"; nextNumber = true; break;
                case 13:  equation = "div"; stringEquation = "÷"; nextNumber = true; break;
            }
        }
        
    }
    
    number0 = parseInt(stringnumber0);
    number1 = parseInt(stringnumber1);
    
    stringDisplay = stringnumber0 + stringEquation + stringnumber1;
    updateDisplay();
}

function equalsPress()
{
   if(equation != "nothing")
   {
    switch(equation){
        case "sum":
            summedNumbs = number0 + number1;
            number0 = summedNumbs; stringnumber0 = summedNumbs.toString();
            number1 = 0; stringnumber1 = "";
            selected = true;
            nextNumber = false;
            equation = "nothing";
            stringEquation=""
            stringDisplay = stringnumber0 + stringEquation + stringnumber1;
            updateDisplay();
            break;
        case "sub":
            summedNumbs = number0 - number1;
            number0 = summedNumbs; stringnumber0 = summedNumbs.toString();
            number1 = 0; stringnumber1 = "";
            selected = true;
            nextNumber = false;
            equation = "nothing";
            stringEquation=""
            stringDisplay = stringnumber0 + stringEquation + stringnumber1;
            updateDisplay();
            break;
        case "div":
            summedNumbs = Math.round(number0 / number1);
            number0 = summedNumbs; stringnumber0 = summedNumbs.toString();
            number1 = 0; stringnumber1 = "";
            selected = true;
            nextNumber = false;
            equation = "nothing";
            stringEquation=""
            stringDisplay = stringnumber0 + stringEquation + stringnumber1;
            updateDisplay();
            break;
        case "mult":
            summedNumbs = number0 * number1;
            number0 = summedNumbs; stringnumber0 = summedNumbs.toString();
            number1 = 0; stringnumber1 = "";
            selected = true;
            nextNumber = false;
            equation = "nothing";
            stringEquation=""
            stringDisplay = stringnumber0 + stringEquation + stringnumber1;
            updateDisplay();
            break;
    }
   }
}

function clear_all(){
    alert(Cleared);
}

function updateDisplay()
{
    document.getElementById("Display").innerHTML = stringDisplay;
}