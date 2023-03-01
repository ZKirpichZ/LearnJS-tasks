function pow(x, n) {
    let result = x ** n;
    return result;
}

let x = prompt('Введи же x:');
let n = prompt('Введи же n:');


(n < 0) ? alert(`Степень ${n} не поддерживается, используйте натуральное число`) : alert(pow(x, n))