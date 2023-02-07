const input=document.querySelector("#input");

//os.addEventListener("click",doss);
let result="";
let operacion="";
let resulSUma=0;
let sumarr=0;
const cero=document.querySelector("#cero");
const uno=document.querySelector("#uno");
const dos=document.querySelector("#dos");
const tres=document.querySelector("#tres");
const cuatro=document.querySelector("#cuatro");
const cinco=document.querySelector("#cinco");
const seis=document.querySelector("#seis");
const siete=document.querySelector("#siete");
const ocho=document.querySelector("#ocho");
const nueve=document.querySelector("#nueve");
const sumar=document.querySelector("#suma");
const restar=document.querySelector("#menos");
const dividir=document.querySelector("#division");
const multiplicar=document.querySelector("#nueve");
const igual=document.querySelector("#igual");

igual.addEventListener("click",function(e){igualll()})
uno.addEventListener("click",function(e){console.log("222");input.value=input.value+"1"})
dos.addEventListener("click",function(e){input.value=input.value+"2"})
tres.addEventListener("click",function(e){input.value=input.value+"3"})
cuatro.addEventListener("click",function(e){input.value=input.value+"4"})
cinco.addEventListener("click",function(e){input.value=input.value+"5"})
seis.addEventListener("click",function(e){input.value=input.value+"6"})
siete.addEventListener("click",function(e){input.value=input.value+"7"})
ocho.addEventListener("click",function(e){input.value=input.value+"8"})
nueve.addEventListener("click",function(e){input.value=input.value+"9"})
sumar.addEventListener("click",function(e){input.value=input.value+"+"})
restar.addEventListener("click",function(e){input.value=input.value+"-"})
dividir.addEventListener("click",function(e){input.value=input.value+"/"})
multiplicar.addEventListener("click",function(e){input.value=input.value+"*"})
cero.addEventListener("click",function(e){input.value=input.value+"0"})




function igualll(){result=input.value;
    console.log(result.split(''));
    let enunciado= result.split('');
    sumarr=0;
    for(let i=0;i<=enunciado.length;i++){
        if(enunciado[i]=="+"){
            operacion="suma";

            
           
           
          }else if(enunciado[i]=="-"){
            operacion="resto";
          }
          else if(enunciado[i]=="*"){
            operacion="multiplicacion";
          }
          else if(enunciado[i]=="/"){
            operacion="divicion";
          }
    }
    switchoop(operacion); 


}
    result=input.value;
console.log(result.split);

function switchoop (op){
    switch(op){
        case "suma":
        let numerosSUm =result.split("+")
        console.log(numerosSUm);
        numerosSUm.forEach(numeros => {
    
           sumarr+=Number(numeros);
           console.log(sumarr);
           
           
        });    
        console.log(sumarr); 
    }
}




function suma(num1,num2){

    let resultado=num1+num2;
    console.log(resultado) ;
    return resultado;


}
function resta(num1,num2){

    let resultado=num1-num2;
    return resultado


}
function multiplicacion(num1,num2){

    let resultado=num1*num2;
    return resultado


}
function divicion(num1num2){

    let resultado=num1/num2;
    return resultado


}
