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
uno.addEventListener("click", function (e) { input.value = input.value + 1 })
dos.addEventListener("click", function (e) { input.value = input.value + 2 })
tres.addEventListener("click", function (e) { input.value = input.value + 3 })
cuatro.addEventListener("click", function (e) { input.value = input.value + 4 })
cinco.addEventListener("click", function (e) { input.value = input.value + 5 })
seis.addEventListener("click", function (e) { input.value = input.value + 6 })
siete.addEventListener("click", function (e) { input.value = input.value + 7 })
ocho.addEventListener("click", function (e) { input.value = input.value + 8 })
nueve.addEventListener("click", function (e) { input.value = input.value + 9 })
sumar.addEventListener("click", function (e) { input.value = input.value + "+" })
restar.addEventListener("click", function (e) { input.value = input.value + "-" })
dividir.addEventListener("click", function (e) { input.value = input.value + "/" })
multiplicar.addEventListener("click", function (e) { input.value = input.value + "*" })
cero.addEventListener("click", function (e) { input.value = input.value + 0 })
borrar.addEventListener("click", function (e) { input.value = "" });
parentesisUno.addEventListener("click", function (e) { input.value = input.value + "(" });
parentesisDos.addEventListener("click", function (e) { input.value = input.value + ")" });
function igualll() {
    result = input.value;
    let enunciado = result.split('');
    sumarr = 0;
    for (let i = 0; i <= enunciado.length; i++) {
        if (enunciado[i] == "+") {
            operacion = "suma";
        } else if (enunciado[i] == "-") {
            operacion = "resta";
        }
        else if (enunciado[i] == "*") {
            operacion = "multiplicacion";
        }
        else if (enunciado[i] == "/") {
            operacion = "division";
        }
    }
    switchoop(operacion);
}
result = input.value;
function switchoop(op) {
    switch (op) {
        case "suma":
            let numerosSUm = result.split("+")
            numerosSUm.forEach(numeros => {
                sumarr += Number(numeros);
            });
            input.value = sumarr
            break;
        case "resta":
            let numerosRest = result.split("-");
            numerosRest.forEach(numeros => {
                if (rest == false) {
                    rest = Number(numeros)
                } else {
                    rest -= Number(numeros);
                }
            });
            input.value = rest
            break;
            case "multiplicacion":
            let numerosMult = result.split("*")
            numerosMult.forEach(numeros =>{
                if (mult == false){
                    mult = numeros;
                }else{
                    mult = mult * numeros
                }
            })
            input.value = mult
            break;
    }
}