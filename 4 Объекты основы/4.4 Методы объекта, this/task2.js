let calculator = {
    read() {
        this.a = +prompt('Введите а:', 100);
        this.b = +prompt('Введите b:', 100);
    },
    
    sum() {
        return this.a + this.b
    },

    mul() {
        return this.a * this.b
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());