
const calcScreenNum = document.querySelector('.calculator-number');
const calcOldNum = document.querySelector('.calculator-old-equation');
const buttons = document.querySelectorAll("button");

let oldValue = 0;
let newValue = 0;
curOperation = '';

let updateScreen = () =>{
    calcScreenNum.textContent = newValue;
    if (curOperation != '')calcOldNum.textContent = oldValue + ' ' + curOperation;
    else calcOldNum.textContent = '';
};

let getAnswer = () =>{
    if(curOperation == '/'){
        newValue = oldValue / newValue;
    }else if(curOperation == 'x'){
        newValue = oldValue * newValue;
    }else if(curOperation == '-'){
        newValue = oldValue - newValue;
    }else if(curOperation == '+'){
        newValue = oldValue + newValue;
    }
    oldValue = 0
    curOperation = ''
}

let operation = function(btn){
    if (btn == 'CLEAR'){
        curValue = 0;
        newValue = 0;
        curOperation = '';
    }else if(btn == 'DELETE'){
        newValue = (newValue - (newValue%10))/10;
    }else if(btn == '/'){
        if (curOperation != ''){
            getAnswer();
        }
        oldValue = newValue;
        newValue = 0;
        curOperation = btn;
    }else if(btn == 'x'){
        if (curOperation != ''){
            getAnswer();
        }
        oldValue = newValue;
        newValue = 0;
        curOperation = btn;
    }else if(btn == '-'){
        if (curOperation != ''){
            getAnswer();
        }
        oldValue = newValue;
        newValue = 0;
        curOperation = btn;
    }else if(btn == '+'){
        if (curOperation != ''){
            getAnswer();
        }
        oldValue = newValue;
        newValue = 0;    
        curOperation = btn;
    }else if(btn == '.'){
    }else if(btn == '='){
        getAnswer();
    }else {
        newValue = (newValue-(newValue%1))*10 + Number(btn) + newValue%1;
    }


    updateScreen();
} 


buttons.forEach(function(button){
    button.addEventListener("click",()=>{operation(button.textContent)})
});

