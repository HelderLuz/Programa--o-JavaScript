let num = 1;
let somaImpares = 0;

while (num <= 10) {
    if (num % 2 !== 0) {
        somaImpares = somaImpares + num;
    }
    num = num + 1;
}