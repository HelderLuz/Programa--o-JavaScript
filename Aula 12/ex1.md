```javascript
/* 1 */ let a = 10
/* 2 */ let b = 5
/* 3 */ while (a > 0) {
/* 4 */     a = a - 2
/* 5 */     b = b + 1
/* 6 */ }
```

step | line | a | b | ação
|:---:|:---:|:---:|:---:|---|
|1|3|10|5|inicia `a` e `b`
|2|3|8|6|exec bloco while
|3|3|6|7|exec bloco while
|4|3|4|8|exec bloco while
|5|3|2|9|exec bloco while
|6|3|0|10|exec bloco while
|7|3|0|10|cond while falso