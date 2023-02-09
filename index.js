const input = document.querySelector("#input");
const input2 = document.querySelector("#input2");
const reslt2 = document.querySelector("#reslt2");
let result2 = "";
let result = "";
let operacion = '';
let resulSUma = 0;
let sumarr = 0;
let comprobacion = [];
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
uno.addEventListener("click", function (e) { input.value = input.value + 1; input2.value = input2.value + 1 });
dos.addEventListener("click", function (e) { input.value = input.value + 2; input2.value = input2.value + 2 });
tres.addEventListener("click", function (e) { input.value = input.value + 3; input2.value = input2.value + 3 })
cuatro.addEventListener("click", function (e) { input.value = input.value + 4; input2.value = input2.value + 4 });
cinco.addEventListener("click", function (e) { input.value = input.value + 5; input2.value = input2.value + 5 });
seis.addEventListener("click", function (e) { input.value = input.value + 6; input2.value = input2.value + 6 });
siete.addEventListener("click", function (e) { input.value = input.value + 7; input2.value = input2.value + 7 });
ocho.addEventListener("click", function (e) { input.value = input.value + 8; input2.value = input2.value + 8 });
nueve.addEventListener("click", function (e) { input.value = input.value + 9; input2.value = input2.value + 9 });
sumar.addEventListener("click", function (e) { input.value = input.value + "+"; input2.value = input2.value + "+" });
restar.addEventListener("click", function (e) { input.value = input.value + "-"; input2.value = input2.value + "-" });
dividir.addEventListener("click", function (e) { input.value = input.value + "/"; input2.value = input2.value + "/" });
multiplicar.addEventListener("click", function (e) { input.value = input.value + "*"; input2.value = input2.value + "*" });
cero.addEventListener("click", function (e) { input.value = input.value + 0; input2.value = input2.value + 0 });
borrar.addEventListener("click", function (e) { input.value = ""; input2.value = ""; reslt2.value = "" });
parentesisUno.addEventListener("click", function (e) { input.value = input.value + "("; input2.value = input2.value + "(" });
parentesisDos.addEventListener("click", function (e) { input.value = input.value + ")"; input2.value = input2.value + ")" });
raiz.addEventListener("click", function (e) { input.value = "√" + input.value; input2.value = "√" + input2.value });
elevado.addEventListener("click", function (e) { input.value = input.value + "^"; input2.value = input2.value + "**" });
punto.addEventListener("click", function (e) { if (input.value != 0) { input.value = input.value + "." } else if (input.value == 0) { input.value = 0 + "." } });
historial.addEventListener("click", function (e) { $('#displayNone').attr('id', 'displayBlock'); history(); });
let historialArray = [];
let textHistory = document.getElementById('textHistory')
let resultadoHistorial
let saltoDeLinea = "</br>"
bandera = false;
function igualll() {
    if (input.value != input.placeholder) {
        result = input.value;
        result2 = input2.value;
        historialArray.push(result)
        let enunciado = result.split('');
        for (let i = 0; i <= enunciado.length; i++) {
            if (enunciado[i] == "√") {
                operacion = "raiz"
                bandera = true;
                break;
            } else {
                resultadoHistorial = eval(result2);
                input2.value = resultadoHistorial
                input.value = input2.value;
            }
        }
        if (bandera == false) {
            historialArray.push(resultadoHistorial);
            resultadoHistorial = "";
        }
        switchoop(operacion);
    }
}
result = input.value;
function switchoop(op) {
    switch (op) {
        case "raiz":
            let numerosRaiz = result.split("√");
            numerosRaiz.forEach(numeros => {
                if (parseFloat(numeros) >= 0) {
                    raiz = Math.sqrt(parseFloat(numeros))
                } else if (parseFloat(numeros) < 0) {
                    raiz = "error"
                }
            })
            historialArray.push(raiz);
            input.value = raiz
            bandera = false;
            break;

    }
}
function history() {
    if (historialArray.length != 0) {
        for (i = 0; i < historialArray.length; i += 2) {
            const histo = document.querySelector(".historial");
            let html =`Operación: ${historialArray[i]}; resultado: ${historialArray[i + 1]} <br>`;
            histo.innerHTML += html;

        }
    } else if (historialArray.length == 0) {
        let text = document.createTextNode(`No hay operaciones en el historial`);
        textHistory.appendChild(text);
    }
}