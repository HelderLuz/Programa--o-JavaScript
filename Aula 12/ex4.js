let num = 10;
let total = 0;

while (num > 0) {
    total = total + num;
    if (num === 5) {
        total = total - 5;
    }
    num = num - 1;
}