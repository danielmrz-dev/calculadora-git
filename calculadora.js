class Calculadora {
    adicao(a, b) {
        return a + b;
    }

    subtracao(a, b) {
        return a - b;
    }

    multiplicacao(a, b) {
        return a * b;
    }

    divisao(a, b) {
        if (b === 0) {
            return "Erro. Não é possível fazer divisão por ZERO."
        }        
        return a / b;
    }
}

const calculadoraTeste = new Calculadora()

console.log(calculadoraTeste.adicao(1, 2))
console.log(calculadoraTeste.subtracao(5, 2))
console.log(calculadoraTeste.multiplicacao(7, 5))
console.log(calculadoraTeste.divisao(9, 3))
console.log(calculadoraTeste.divisao(9, 0))