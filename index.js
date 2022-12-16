const valorSup = document.getElementById('superior');
const valorInf = document.getElementById('inferior');
const numeros = document.querySelectorAll('.botonNumber');
const operaciones = document.querySelectorAll('.botonOper');
let ultimaop = '';


numeros.forEach((numero)=>{
    numero.addEventListener('click', function (e) {
        crearValorInf(e.target);
    })
});

operaciones.forEach((operacion)=>{
    operacion.addEventListener('click', function (e) {
        signo(e.target);
    })
});



function crearValorInf(elemento){
    
    const actual = valorInf.innerHTML
    const numero = elemento.innerHTML;

    if(numero === '.' && actual.includes('.')) return;

    if(actual === '0') valorInf.innerHTML  =  numero;

    else valorInf.innerHTML =actual + numero;
    console.log(valorInf.innerHTML);
}


function suma(a,b) {
    return a+b;
}
function resta(a,b) {
    return a-b;
}
function multiplicar(a,b) {
    return a*b;
}
function dividir(a,b) {
        return a/b;
}
function potencia(a,b) {
        return Math.pow(a,b);
}
function modulo(a,b) {
        return a%b;
}
function raiz2(a,b) {
        return Math.sqrt(a,b);
}


function borrar() {
    const actual =  valorInf.innerHTML
    if(actual.length <= 1) valorInf.innerHTML = 0;
    else valorInf.innerHTML =actual.slice(0,-1);
}

function limpiar() {
    valorInf.innerHTML = 0;
    valorSup.innerHTML = ''
    ultimaop = '';
}

function signo(operacion) {
    let simbolo  = '';

    if(operacion === '=') simbolo = '=';
    else simbolo= operacion.innerHTML;

    a= parseFloat(valorSup.innerHTML.slice(0,-1));
    b= parseFloat(valorInf.innerHTML);

        switch (ultimaop) {
            case '+':
                console.log('suma',a,b);
                valorSup.innerHTML= suma(a,b) + simbolo;
                break;
            case '-':
                 console.log('resta',a,b);
                valorSup.innerHTML= resta(a,b) + simbolo;               
                break;
        
             case 'x':
                console.log('mult',a,b);
                valorSup.innerHTML= multiplicar(a,b) + simbolo;               
                break;
            case '/':
                console.log('div',a,b);
                valorSup.innerHTML= dividir(a,b) + simbolo;                
                break;     
            case '^':
                console.log('div',a,b);
                valorSup.innerHTML= potencia(a,b) + simbolo;                
                break;     
            case 'Mod.':
                console.log('div',a,b);
                valorSup.innerHTML= modulo(a,b) + simbolo;                
                break;     
            case '√':
                console.log('div',a,b);
                valorSup.innerHTML= raiz2(a,b) + simbolo;                
                break;     
                    
            case '':
                valorSup.innerHTML = valorInf.innerHTML + simbolo;
                break;
            case '=':
                if (valorInf.innerHTML === '0')
                    valorSup.innerHTML = valorSup.innerHTML.slice(0,-1) + simbolo;
                else
                    valorSup.innerHTML = valorInf.innerHTML
                break;
            default:
                
                valorInf.innerHTML = 0
                ultimaop = '';
                return;
        }
       
        ultimaop = simbolo;
        valorInf.innerHTML = 0
     
}

