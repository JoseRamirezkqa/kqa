const input = document.querySelector("#input");
let result = "";
let operacion = '';
let resulSUma = 0;
let sumarr = 0;
let rest = false;
let mult = false;
const cero = document.querySelector("#cero");
const uno = document.querySelector("#uno");
const dos = document.querySelector("#dos");
const tres = document.querySelector("#tres");
const cuatro = document.querySelector("#cuatro");
const cinco = document.querySelector("#cinco");
const seis = document.querySelector("#seis");
const siete = document.querySelector("#siete");
const ocho = document.querySelector("#ocho");
const nueve = document.querySelector("#nueve");
const sumar = document.querySelector("#suma");
const restar = document.querySelector("#menos");
const dividir = document.querySelector("#division");
const multiplicar = document.querySelector("#multiplicacion");
const igual = document.querySelector("#igual");
igual.addEventListener("click", function (e) { igualll() })
uno.addEventListener("click", function (e) { input.value = input.value + 1 });
dos.addEventListener("click", function (e) { input.value = input.value + 2 });
tres.addEventListener("click", function (e) { input.value = input.value + 3 })
cuatro.addEventListener("click", function (e) { input.value = input.value + 4 });
cinco.addEventListener("click", function (e) { input.value = input.value + 5 });
seis.addEventListener("click", function (e) { input.value = input.value + 6 });
siete.addEventListener("click", function (e) { input.value = input.value + 7 });
ocho.addEventListener("click", function (e) { input.value = input.value + 8 });
nueve.addEventListener("click", function (e) { input.value = input.value + 9 });
sumar.addEventListener("click", function (e) { input.value = input.value + "+" });
restar.addEventListener("click", function (e) { input.value = input.value + "-" });
dividir.addEventListener("click", function (e) { input.value = input.value + "/" });
multiplicar.addEventListener("click", function (e) { input.value = input.value + "*" });
cero.addEventListener("click", function (e) { input.value = input.value + 0 });
borrar.addEventListener("click", function (e) { input.value = "" });
parentesisUno.addEventListener("click", function (e) { input.value = input.value + "(" });
parentesisDos.addEventListener("click", function (e) { input.value = input.value + ")" });
raiz.addEventListener("click", function (e) { input.value = "√" + input.value });
elevado.addEventListener("click", function (e) { input.value = input.value + "²" });
punto.addEventListener("click", function (e) { if (input.value != 0) { input.value = input.value + "." } else if (input.value == 0) { input.value = 0 + "." } });
historial.addEventListener("click",function (e) {$('#displayNone').attr('id','displayBlock'); history();});
let historialArray = [];
let textHistory = document.getElementById('textHistory')
function igualll() {
    if (input.value != input.placeholder) {
        result = input.value;
        let enunciado = result.split('');
        sumarr = 0;
        for (let i = 0; i <= enunciado.length; i++) {
            if (enunciado[i] == "²") {
                operacion = "elevado"
            } else if (enunciado[i] == "%") {
                operacion = "promedio"
                break
            }
            else if (enunciado[i] == "*") {
                operacion = "multiplicacion";
            } else if (enunciado[i] == "/") {
                operacion = "division";
            } else if (enunciado[i] == "√") {
                operacion = "raiz"
                break;
            } else if (enunciado[i] == "+") {
                operacion = "suma";
            } else if (enunciado[i] == "-") {
                operacion = "resta";
            }
        }
        switchoop(operacion);
    }
}
result = input.value;
function switchoop(op) {
    switch (op) {
        case "suma":
            let numerosSUm = result.split("+")
            numerosSUm.forEach(numeros => {
                sumarr += parseFloat(numeros);
            });
            input.value = sumarr;
            historialArray.push(result);
            historialArray.push(sumarr);
            break;
        case "resta":
            let numerosRest = result.split("-");
            for (let i = 0; i < numerosRest.length; i++) {
                if (numerosRest[i] != "") {
                    if (rest == false && i == 0) {
                        rest = parseFloat(numerosRest[i])
                    } else if (rest == false && i != 0) {
                        rest = -parseFloat(numerosRest[i])
                    } else {
                        rest -= parseFloat(numerosRest[i]);
                    }

                }
            }
            input.value = rest;
            historialArray.push(result);
            historialArray.push(rest);
            rest = false;
            break;
        case "multiplicacion":
            let numerosMult = result.split("*")
            numerosMult.forEach(numeros => {
                if (mult == false) {
                    mult = numeros;
                } else {
                    mult = mult * numeros
                }
            })
            input.value = mult
            historialArray.push(result);
            historialArray.push(mult);
            mult = false;
            break;
        case "division":
            let div;
            let numerosDiv = result.split("/");
            for (let i = 0; i < numerosDiv.length; i++) {
                console.log(div)
                if (i != 1) {
                    div = parseFloat(numerosDiv[i]);
                } else if (i == 1) {
                    if (parseFloat(numerosDiv[i]) == 0) {
                        div = "error"
                    } else if (parseFloat(numerosDiv[i]) != 0) {
                        div /= parseFloat(numerosDiv[i])
                    }
                }
            }
            input.value = div
            historialArray.push(result);
            historialArray.push(div);
            break
        case "raiz":
            let raiz;
            let numerosRaiz = result.split("√");
            numerosRaiz.forEach(numeros => {
                if (parseFloat(numeros) >= 0) {
                    raiz = Math.sqrt(parseFloat(numeros))
                } else if (parseFloat(numeros) < 0) {
                    raiz = "error"
                }
            })
            input.value = raiz
            historialArray.push(result);
            historialArray.push(raiz);
            break;
        case "elevado":
            let elevado;
            let numerosElevado = result.split("²");
            numerosElevado.forEach(numeros => {
                if (numeros != "") {
                    elevado = Math.pow(numeros, 2)
                }
            })
            input.value = elevado
            historialArray.push(result);
            historialArray.push(elevado);
            break;

    }
}
function history(){
    if (historialArray.length != 0 ){
        for( i =0; i < historialArray.length; i += 2){
          let text = document.createTextNode(`Operación: ${historialArray[i]}; resultado: ${historialArray[i+1]}`  )
          textHistory.appendChild(text)
        }
    }else if(historialArray.length == 0){
        alert(`Igual a cero`)
    }
}