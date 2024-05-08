import { sumar, restar, multiplicar, dividir, limpiar } from "./operaciones.js";

let numero1 = 0;
let numero2 = 0;

let resultado = 0;

let btnSumar = document.getElementById("btnSumar");
let btnRestar = document.getElementById("btnRestar");
let btnMultiplicar = document.getElementById("btnMultiplicar");
let btnDividir = document.getElementById("btnDividir");
let btnLimpiar = document.getElementById("btnLimpiar");



let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let result = document.getElementById("resultado");

let soloNumeros = /^[0-9]+$/;


btnSumar.addEventListener("click", function(e){

    error1.innerHTML = "";
    error2.innerHTML = "";


    numero1 = document.getElementById("numero1").value;

    if(numero1 === ""){
        error1.innerHTML = "Debe agregar el primer numero";
        error1.style.color = "red";
        return;
    }

    if(!soloNumeros.test(numero1)){
        error1.innerHTML = "Solo se permiten numeros";
        error1.style.color = "red";
        return;
    }

    numero2 = document.getElementById("numero2").value;

    if(numero2 === ""){
        error2.innerHTML = "Debe agregar el segundo numero";
        error2.style.color = "red";
        return;
    }

    if(!soloNumeros.test(numero2)){
        error2.innerHTML = "Solo se permiten numeros";
        error2.style.color = "red";
        return;
    }

    resultado = sumar(numero1,numero2);
    result.innerHTML = resultado;
    result.style.color = "blue";
    result.style.fontFamily = "2rem";
    result.style.fontWeight = "700";

    limpiar();
})

btnRestar.addEventListener("click", function(e){

    error1.innerHTML = "";
    error2.innerHTML = "";


    numero1 = document.getElementById("numero1").value;

    if(numero1 === ""){
        error1.innerHTML = "Debe agregar el primer numero";
        error1.style.color = "red";
        return;
    }

    if(!soloNumeros.test(numero1)){
        error1.innerHTML = "Solo se permiten numeros";
        error1.style.color = "red";
        return;
    }

    numero2 = document.getElementById("numero2").value;

    if(numero2 === ""){
        error2.innerHTML = "Debe agregar el segundo numero";
        error2.style.color = "red";
        return;
    }

    if(!soloNumeros.test(numero2)){
        error2.innerHTML = "Solo se permiten numeros";
        error2.style.color = "red";
        return;
    }

    resultado = restar(numero1,numero2);
    result.innerHTML = resultado;
    result.style.color = "red";
    result.style.fontFamily = "2rem";
    result.style.fontWeight = "700";

    limpiar();
})

btnMultiplicar.addEventListener("click", function(e){

    error1.innerHTML = "";
    error2.innerHTML = "";


    numero1 = document.getElementById("numero1").value;

    if(numero1 === ""){
        error1.innerHTML = "Debe agregar el primer numero";
        error1.style.color = "red";
        return;
    }

    if(!soloNumeros.test(numero1)){
        error1.innerHTML = "Solo se permiten numeros";
        error1.style.color = "red";
        return;
    }

    numero2 = document.getElementById("numero2").value;

    if(numero2 === ""){
        error2.innerHTML = "Debe agregar el segundo numero";
        error2.style.color = "red";
        return;
    }

    if(!soloNumeros.test(numero2)){
        error2.innerHTML = "Solo se permiten numeros";
        error2.style.color = "red";
        return;
    }

    resultado = multiplicar(numero1,numero2);
    result.innerHTML = resultado;
    result.style.color = "green";
    result.style.fontFamily = "2rem";
    result.style.fontWeight = "700";

    limpiar();
})

btnDividir.addEventListener("click", ()=> {

    error1.innerHTML = "";
    error2.innerHTML = "";


    numero1 = document.getElementById("numero1").value;

    if(numero1 === ""){
        error1.innerHTML = "Debe agregar el primer numero";
        error1.style.color = "red";
        return;
    }

    if(!soloNumeros.test(numero1)){
        error1.innerHTML = "Solo se permiten numeros";
        error1.style.color = "red";
        return;
    }

    numero2 = document.getElementById("numero2").value;

    if(numero2 === ""){
        error2.innerHTML = "Debe agregar el segundo numero";
        error2.style.color = "red";
        return;
    }

    if(numero2 === "0"){
        error2.innerHTML = "No se puede dividir por cero";
        error2.style.color = "red";
    }
    

    if(!soloNumeros.test(numero2)){
        error2.innerHTML = "Solo se permiten numeros";
        error2.style.color = "red";
        return;
    }

    resultado = dividir(numero1,numero2);
    result.innerHTML = resultado;
    result.style.color = "yellow";
    result.style.fontFamily = "2rem";
    result.style.fontWeight = "700";

    limpiar();

})


btnLimpiar.addEventListener("click",()=> {
    limpiar();
})
