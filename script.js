
/*
What does not work 
pow() does not work because I am not doing string slicing correctly 

EXP does not work bc its the same problem as above 

*/ 
class Calculator {
    // constructor init the values to a default value
    constructor(userEntert){
        this.userEntert = userEntert
        this.clear()
    }
    // used to add a number whenever the number is typed
    // if statement checks if there is already a '.' if there is and the input button is a '.'
    // then we return meaning there will be no update to list of numbers 
    // 
    addNumber(number){
        if (this.power == 1){
            for (let x = this.userEnter.length - 1; x >= 0; x--){
                if (this.userEnter.charAt(x) == 1,2,3,4,5,6,7,8,9,0){
                    this.numbertoadd = this.numbertoadd + this.userEnter.charAt(x)
                }
            }
        }
        else{
            this.userEnter = this.userEnter.toString() + number.toString()
            this.pythonLogic = this.pythonLogic + number.toString() 
        }
        
    }

    //operation that is selected
    addOperation(op){  
        if (op == '×'){
            this.userEnter = this.userEnter.toString() + op.toString()
            this.pythonLogic = this.pythonLogic + '*'
            console.log(this.pythonLogic)
        }
        else if (op == '÷'){
            this.userEnter = this.userEnter.toString() + op.toString()
            this.pythonLogic = this.pythonLogic + '/'
            console.log(this.pythonLogic)
        }
        else{
            this.userEnter = this.userEnter.toString() + op.toString() 
            this.pythonLogic = this.pythonLogic + op.toString() 
            console.log(this.pythonLogic)
        }
    }
    // power function should take the previous element from the userEnter for the first param and then the one
    // after you click would be the second param. 
    otherFunctions(func){
        console.log(func)
        if (func == '^'){
            this.userEnter = this.userEnter.toString() + func.toString()
            this.pythonLogic = this.pythonLogic + "Math.pow(" + this.numbertoadd + ','
            this.power = 1 
            return
        }
        else if (func == 'E'){
            // same as power its hard for me to slice 
        }
        else if (func == 'sqrt('){
            this.userEnter = this.userEnter.toString() + '√('
            this.pythonLogic = this.pythonLogic + "Math." + func.toString() 
        }
        else if (func == 'log10('){
            this.userEnter = this.userEnter.toString() + 'log('
            this.pythonLogic = this.pythonLogic + "Math." + func.toString() 
        }
        else{
            this.userEnter = this.userEnter.toString() + func.toString()
            this.pythonLogic = this.pythonLogic + "Math." + func.toString() 
            console.log(this.pythonLogic)
        }
        
    }
    solve(){
        this.userEnter = eval(this.pythonLogic)
    }

    update(){
        this.userEntert.innerText = this.userEnter
    }

    clear(){
        this.userEnter = ''
        this.pythonLogic = ''
    }
}

const userEntert = document.querySelector('[data-userenter]')

const numButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')

const acButton = document.querySelector('[data-ac]')
const equalsButtons = document.querySelector('[data-equals]')

const degButtons = document.querySelector('[data-deg]') // this button does not do anything beause its already in degrees and there is no option for radians
const factorButtons = document.querySelector('[data-factor]')
const sinButtons = document.querySelector('[data-sin]')
const tanButtons = document.querySelector('[data-tan]')
const lnButtons = document.querySelector('[data-ln]')
const cosButtons = document.querySelector('[data-cos]')
const logButtons = document.querySelector('[data-log]')
const expButtons = document.querySelector('[data-exp]')
const powerButtons = document.querySelector('[data-power]')
const sqrtButtons = document.querySelector('[data-sqrt]')

const calculator = new Calculator(userEntert) 

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.innerText)
        calculator.addNumber(button.innerText) 
        calculator.update() 
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.addOperation(button.innerText) 
        calculator.update()
    })
})


acButton.addEventListener('click', button => {
    calculator.clear()
    calculator.update()
})

equalsButtons.addEventListener('click', button => {
    calculator.solve()
    calculator.update() 
})

lnButtons.addEventListener('click', button => {
    calculator.otherFunctions('ln(')
    calculator.update() 
})

sinButtons.addEventListener('click', button => {
    calculator.otherFunctions('sin(')
    calculator.update() 
})

tanButtons.addEventListener('click', button => {
    calculator.otherFunctions('tan(')
    calculator.update() 
})

logButtons.addEventListener('click', button => {
    calculator.otherFunctions('log10(')
    calculator.update() 
})

cosButtons.addEventListener('click', button => {
    calculator.otherFunctions('cos(')
    calculator.update() 
})

powerButtons.addEventListener('click', button => {
    calculator.otherFunctions('^')
    calculator.update() 
})

factorButtons.addEventListener('click', button => {
    calculator.otherFunctions('!')
    calculator.update() 
})

sqrtButtons.addEventListener('click', button => {
    calculator.otherFunctions('sqrt(')
    calculator.update() 
})