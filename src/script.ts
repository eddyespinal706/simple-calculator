class MathOp{
    n1: number
    n2: number

    constructor(n1: number, n2: number){
        this.n1 = n1,
        this.n2 = n2
    }

    suma(){
        return this.n1 + this.n2
    }

    resta(){
        return this.n1 - this.n2
    }

    multi(){
        return this.n1 * this.n2
    }

    division(){
        return this.n1 / this.n2
    }
}

const x = document.getElementById('n1') as HTMLInputElement
const y = document.getElementById('n2') as HTMLInputElement 
const calc = document.getElementById('calc-form') as HTMLElement
const ops = document.getElementById('math-op') as HTMLInputElement

const math = new MathOp(parseFloat(x.value), parseFloat(y.value))
const res = document.getElementById('result') as HTMLElement

calc.addEventListener("submit", (e) =>{
    e.preventDefault()
    switch (ops.value) {
        case "suma":
             return res.textContent = JSON.stringify(math.suma())
            break;
    
        case "resta":
            return res.textContent = JSON.stringify(math.resta())
            break;

        case "multi":
            return res.textContent = JSON.stringify(math.multi())
            break;
        
        case "division":
            return res.textContent = JSON.stringify(math.division())
            break;
        
        default:
            break;
    }

})

