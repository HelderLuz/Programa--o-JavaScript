1. Explique a diferença entre `var`, `let` e `const`.

`var` possui escopo global e de função. Pode ser reatribuída e redeclarada.
`let` possui escopo de bloco. Pode ser reatribuída, mas não redeclarada.
`const` possui escopo de bloco. Não pode ser reatribuída, nem redeclarada.

|                      | `var`  | `let`   | `const`  |
| :------------------: | :----: | :-----: | :------: |
|   Escopo de global   |   ✅   |   ✅*  |    ✅*   |
|   Escopo de função   |   ✅   |   ✅*  |    ✅*   |
|   Escopo de bloco    |   ❌   |   ✅   |    ✅    |
| Pode ser redeclarada |   ✅   |   ❌   |    ❌    |
| Pode ser reatribuida |   ✅   |   ✅   |    ❌    |


<br><br>

---

2. Explique o conceito de **hoisting** e como ele afeta `var`, `let` e `const`.

`Hoisting` é o processo de "içar" as declarações das variáveis para o início do escopo. Todas as formas de declaração sofrem *hoisting*, mas apenas `var` é inicializada como *undefined*

<br>

---

3. Corrija o código abaixo para seguir as convenções de nomenclatura e criação de variáveis:

##### Código correto
```javascript
let nome = "João";
let idade = 25;
function calcularIdade(anoNascimento) {
    return 2024 - anoNascimento;
}
```

<br>

---

4. Identifique o escopo das variáveis e a saída no código abaixo:
```javascript
if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
}
console.log(a); // 1, escopo global
console.log(b); // Variável não existe, escopo é de bloco
console.log(c); // Variável não existe, escopo é de bloco
```

<br>
---

5. Corrija os problemas de declaração no código:
```javascript
let nome = "Ana";
nome = "Carlos"; // Problema aqui
let idade = 25;
idade = 30; // Problema aqui
```

<br>

---

6. Corrija os problemas de estilização no código abaixo:
   
```javascript
function calcular(a, b, c) {
    let resultado = a + b * c
    if (resultado > 100) {
        console.log("Resultado muito alto")
        return resultado
    } else {
        console.log("Resultado normal")
        return resultado
    }
}
```

<br>

---

7. Analise o comportamento do hoisting no código
```javascript
console.log(x); // undefined , içado e incializado
console.log(y); // Erro: não inicializada, içada e não inicializada
console.log(z); // Erro: não inicializada, içada e não inicializada

var x = 1;
let y = 2;
const z = 3;
```

<br> 

---

8. Identifique qual declaração usar (var, let ou const) em cada caso:
```javascript
// Configuração que nunca muda
const URL_API = "https://api.exemplo.com";

// Contador em um loop
for (let i = 0; i < 10; i++) {
    // Nome que pode mudar durante execução
    let nomeAtual = obterNome(i);
    
    // Valor calculado que não muda no loop
    const valorFixo = i * 2;
    // ...resto do código
}
```