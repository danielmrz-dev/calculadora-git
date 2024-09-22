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