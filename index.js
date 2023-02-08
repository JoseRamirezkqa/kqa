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
raiz.addEventListener("click", function(e){input.value = "√" + input.value } );
elevado.addEventListener("click", function(e){input.value = input.value + "²"})
promedio.addEventListener("click", function(e){input.value = input.value + "%"})
function igualll() {
    result = input.value;
    let enunciado = result.split('');
    sumarr = 0;
    for (let i = 0; i <= enunciado.length; i++) {
        if (enunciado[i] == "²"){
            operacion = "elevado"
        }else if(enunciado[i] == "%"){
            operacion = "promedio"
            break
        }
        else if (enunciado[i] == "*") {
            operacion = "multiplicacion";
        }else if (enunciado[i] == "/") {
            operacion = "division";
        }else if(enunciado[i] == "√"){
            operacion = "raiz"
            break;
        }else if (enunciado[i] == "+") {
            operacion = "suma";
        } else if (enunciado[i] == "-") {
            operacion = "resta";
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
                sumarr += parseInt(numeros);
            });
            input.value = sumarr
            break;
        case "resta":
            let numerosRest = result.split("-");
            for (let i = 0; i < numerosRest.length; i++){
                if(numerosRest[i] != ""){
                    if (rest == false && i == 0) {
                        rest = parseInt(numerosRest[i])
                    }else if(rest == false && i != 0){
                        rest = -parseInt(numerosRest[i])
                    }else {
                        rest -= parseInt(numerosRest[i]);
                    }

                }
            }
            input.value = rest;
            rest = false;
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
            mult = false;
            break;
            case "division":
            let div;
            let numerosDiv = result.split("/");
            for(let i = 0; i < numerosDiv.length; i++){
                console.log(div)
                if(i != 1){
                    div = parseInt(numerosDiv[i]);
                }else if( i == 1){
                    if(parseInt(numerosDiv[i]) == 0){
                        div = "error"
                    }else if(parseInt(numerosDiv[i]) != 0){
                        div /= parseFloat(numerosDiv[i])
                    }
                }
            }
            input.value = div
            break
            case "raiz":
                let raiz;
                let numerosRaiz = result.split("√");
                numerosRaiz.forEach(numeros =>{
                    if(parseInt(numeros) >=0){
                     raiz = Math.sqrt(parseInt(numeros))   
                    }else if(parseInt(numeros) < 0){
                        raiz = "error"
                    }
                })
                input.value = raiz
                break;
            case "elevado":
                let elevado;
                let numerosElevado = result.split("²");
                numerosElevado.forEach(numeros =>{
                    if(numeros != ""){
                    elevado = Math.pow(numeros,2)
                    }
                })
                input.value = elevado
                break;
            case "promedio":
                let prom;
                let numerosProm = result.split("%");
                for(let i = 0; i < numerosProm.length; i++){
                    if(numerosProm[i] == ""){
                        prom = numerosProm[i-1]/100
                        
                    }
                }
                break
    }
}