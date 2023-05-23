"use strict";
class MathOp {
    constructor(n1, n2) {
        this.n1 = n1,
            this.n2 = n2;
    }
    suma() {
        return this.n1 + this.n2;
    }
    resta() {
        return this.n1 - this.n2;
    }
    multi() {
        return this.n1 * this.n2;
    }
    division() {
        return this.n1 / this.n2;
    }
}
const x = document.getElementById('n1');
const y = document.getElementById('n2');
const calc = document.getElementById('calc-form');
const ops = document.getElementById('math-op');
const math = new MathOp(parseFloat(x.value), parseFloat(y.value));
const res = document.getElementById('result');
calc.addEventListener("submit", (e) => {
    e.preventDefault();
    switch (ops.value) {
        case "suma":
            return res.textContent = JSON.stringify(math.suma());
            break;
        case "resta":
            return res.textContent = JSON.stringify(math.resta());
            break;
        case "multi":
            return res.textContent = JSON.stringify(math.multi());
            break;
        case "division":
            return res.textContent = JSON.stringify(math.division());
            break;
        default:
            break;
    }
});
