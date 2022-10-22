
/* ejm1: creando lista HTML con un array */
const opciones= ['Modulo 1','Modulo 2','Modulo 3','Moldulo 4']

function generarListaOrdenada(vec)
{
    let s= ''
    function comienzo()
    {
        s= '<ol>'
    }
    function fin()
    {
        s=  s +'</ol>'
    }
    // corre funcion comienzo
    comienzo()
    /* llenar la lista <ol> */
   for (let x = 0;x< vec.length; x++) 
   {
        s = s +'<li>' + vec[x] +'</li>'
   }
   /* ejecutar la funcion fin */
   fin()
   return s;

}

document.getElementById('div1').innerHTML= generarListaOrdenada(opciones)
// ejm2: creando un div con array 
const numPrueba =[2,4,6,8,10,12]
function prueba(arrayLista) 
{
    let x=''
    for (let index = 0; index < arrayLista.length; index++) 
    {
       x += '<div>' + arrayLista[index] +'</div>'      
    }
    return x
}
document.getElementById('array1').innerHTML= prueba(numPrueba)


let result
function formaSumar() 
{
    let numUno = document.getElementById("n1").value
    let numDos = document.getElementById("n2") .value
    result = parseInt(numUno) + parseInt(numDos)
}
// salida
function calcular1()
{
    document.querySelector("#result").value=result
}
// calculadora 2 
function calcular() 
{
    let numUno = document.getElementById("n1").value
    numDos = document.getElementById("n2").value 
    if (numUno>0 && numDos>0) 
    {
        let resul = parseInt(numUno) + parseInt(numDos)
    }else
    {
        alert("ingresa numeros validos")
    }
     document.getElementById("formRes").value = resul
}
window.onload = function () 
{
    document.querySelector("#sumar").onclick = sumar
    document.querySelector("#restar").onclick = restar
    document.querySelector("#multiplicar").onclick = multiplicar
    document.querySelector("#dividir").onclick = dividir
}
let resul;
function sumar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) + parseInt(numDos)
}
function restar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) - parseInt(numDos)
}
function multiplicar() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) * parseInt(numDos)
}
function dividir() 
{
    let numUno = document.getElementById("nUno").value
    numDos = document.getElementById("nDos") .value
    resul = parseInt(numUno) / parseInt(numDos)
}
function calcularBoton()
{
    document.querySelector("#resul").value=resul
}
// cuenta regresiva
/* ejercicio 3 */
function CuentaRegre(numr){    
    alert(numr)
    let nuevoNum = numr - 1
    if(nuevoNum > 0){        
        CuentaRegre(nuevoNum)
    }
}
// ejemplo de cuenta regresiva - setTimeout
function capturarDato(){    
    let captura = 0, nuevoNum=0;
    captura = document.getElementById("numRegresiva").value
    CuentaRegresiva(captura) 
    function CuentaRegresiva(captura){
        if(captura>0){
            document.getElementById("resultado").value = captura 
            nuevoNum=document.getElementById("resultado").value
            nuevoNum--
            setTimeout(function(){
                CuentaRegresiva(nuevoNum)},1000);
            document.getElementById("resultado").value = nuevoNum            
        }
        else{
            alert(`Ingrese un Número mayor a 0`)
            document.getElementById("numRegresiva").focus()
        }
    }     
}

/*  el evenentlistener es el que esta pendiente de los eventos o agregar eventos*/
color.addEventListener('change', cambiarColor )
/* ejercicio 5 */
const controlarCaracteres = () =>
{
    let tamTextarea = document.getElementById('description')
    if (tamTextarea.value.length == 0) {
        alert('campo de texto vacío')
    }else if (tamTextarea.value.length > 50) {
        alert(' Texto debe ser de 50max')
    }else
    {
        alert(' Tamaño de texto correcto')
    }
}
/* funcion caracteres */
let boton= document.getElementById('btnTextArea')
boton.addEventListener("click", controlarCaracteres)


// Ejercicio 6 - validar tamaño de caracteres / password field
function verificar(){
    let clave = document.getElementById('clave').value;
    if(clave.length < 5){
        alert('Clave con menos de 5 carácteres !!!')

        
    }else{
        alert('Tamaño clave correcta!!!')
    }
}

let btn1 =  document.querySelector("#btnPss");
btn1.addEventListener('click',verificar);

/* ejecicio 7 */
let color= document.getElementById('select1')
function cambiarColor() 
{
    document.getElementById('text1').value = color.selectedIndex
    document.getElementById('text2').value = color.options[color.selectedIndex].text
    document.getElementById('text3').value = color.options[color.selectedIndex].value
    let valuecolor = color.options[color.selectedIndex].value
    document.getElementById('valuecolor').value = ("#"+valuecolor)     
}
// Ejercicio 7 - select

let slcBox = document.getElementById('select1');

function cambiarColor(){
    document.getElementById('text1').value = slcBox.selectedIndex;
    document.getElementById('text2').value = slcBox.options[slcBox.selectedIndex].text;
    document.getElementById('text3').value = slcBox.options[slcBox.selectedIndex].value;
    let valuecolor=  slcBox.options[slcBox.selectedIndex].value;
    document.getElementById('valueColor').value = ("#"+valuecolor);
}
slcBox.addEventListener('change',cambiarColor);

// Ejercicio 8 - checkbox

function alertaCheck(checkItem){
    if(checkItem.checked){
        document.getElementById("txtImpresion").innerHTML = "Check Seleccionado!";
    }else{
        document.getElementById("txtImpresion").innerHTML = "Check No Seleccionado!";
    }
}

// ejemplo 2 - contar los check seleccionados
 function contarSeleccionados(){
    let cant = 0
    for(let i = 1; i < 6; i++){
        if(document.getElementById("chk"+i).checked){
            cant++
        }
    }
    alert(`Conoce ${cant} Lenguajes`)
 }

 let btn2 = document.getElementById("btnChk");
 btn2.addEventListener('click', contarSeleccionados);


// Ejercicio 9 Text area - tamaño de caracteres

const fnControlaCaracteres = () =>{
    let tamTxtarea = document.getElementById('description');
    if(tamTxtarea.value.length == 0){
        alert('Campo de texto vacío');
    }else if(tamTxtarea.value.length > 50){
        alert('Texto debe ser de 50max');
    }else{
        alert('Tamaño de texto correcto')

    }
}

let btn3 = document.getElementById('btnTextArea');
btn3.addEventListener('click',fnControlaCaracteres);


// Ejercicio 10 Expresiones regulares - validación tipo caracteres
let patronLetra = /^[a-zA-Z]/;
let patronVocal = /[aeiouAEIOUáéíóú]/;
let texto1 = '--> Texto contiene Letra y contiene una vocal';
let texto2 = '--> Texto NO contiene Letra o NO contiene una vocal';

function validarLetras(){   
let palabra = document.getElementById('txtCar').value;
    if(patronLetra.test(palabra) && patronVocal.test(palabra)){
        // alert('--> Texto contiene Letra y contiene una vocal');
        document.getElementById("rtaRegular").innerHTML=texto1;
    }else{
      
        document.getElementById("rtaRegular").innerHTML=texto2;
    }
}

let btn4 = document.getElementById('btnRegular');
btn4.addEventListener('click', validarLetras);

// Ejemplo 2 - 
// Letra+Vocal+número+longitud// let patronLetras = /[a-zA-Z][aeiouAEIOUáéíóú]/;
// validación sólo tipo alfanumericos:


let patronLetras= /^[a-zA-Z0-9]*$/;
let patronNumeros = /[0-9]{1}/;
let texto3 = '--> Correcto!';
let texto4 = '--> Texto debe contener 6 caracteres: Letras/Vocales/Números';

function validarCajaTexto(){   
let entradaReg = document.getElementById('txtReg').value;
    if(patronLetras.test(entradaReg) && patronNumeros.test(entradaReg) && entradaReg.length>5){
        // alert('--> Texto contiene Letra y contiene una vocal');
        document.getElementById("rtaRegular2").innerHTML=texto3;
    }else{
        // alert('--> Texto NO contiene Letra o NO contiene una vocal');
        document.getElementById("rtaRegular2").innerHTML=texto4;
    }
}

let btn5 = document.getElementById('btnRegular2');
btn5.addEventListener('click', validarCajaTexto);

// Ejemplo 3 - número telefonico 607-6303030
// let patronTel = /^[607]{3}\d{7}$/;

let patronTelefono = /^607\d{7}$/;
let texto5 = '--> el Número debe iniciar 607 y contener 10 digitos';

function validarTelefono(){   
let entradaTel = document.getElementById('txtNumber').value;
    if(patronTelefono.test(entradaTel)){
        document.getElementById("rtaRegular3").innerHTML=texto3;
    }else{
        document.getElementById("rtaRegular3").innerHTML=texto5;
    }
}

let btn6 = document.getElementById('btnRegular3');
btn6.addEventListener('click', validarTelefono);

// *********valida numeros decimales 
// validación para entrada de números decimales: /^[0-9]+\.?[0-9]*$/
// comprobar si una cadena es un número escribiremos: /^\d$/

// Ejercicio 11 :Keypress

// cada vez que se ingresa un caracter da una alerta 
let teclaPres = document.getElementById("text");
let resultado = document.getElementById("rtaTeclado");

// Ejemplo 3: El siguiente ejemplo muestra el texto escrito en el input:text en la etiqueta div al presionar la tecla enter (consultar keycode list)
window.addEventListener("keypress", function(evento){
    if(evento.keyCode == 13){
        resultado.innerHTML = teclaPres.value
    }
})

// Ejemplo 4: mostrar caracteres disponibles (keyUp)
const fnCaracteres = ()=>{
    let cantidadCar = document.getElementById("tamText").value.length;
    let disponibles = 50 -parseInt(cantidadCar);
    document.getElementById("cantidad").innerHTML = disponibles;
}

document.getElementById("tamText").addEventListener("keyup",fnCaracteres);


// Ejercicio 12. crear nodos

const nuevoElemento = document.createElement("p");

// creamos un nodo de texto
// let inputText = prompt("Ingrese el texto: ")
const nuevoTexto = document.createTextNode("Insertando nuevo texto - coex")
// opción 1
const nuevoNodo = nuevoElemento.appendChild(nuevoTexto)
// opción 2
// nuevoElemento.appendChild(nuevoTexto)

//crear nodo nuevo
function fnCrear(){
    // document.getElementById("nuevoTexto").appendChild(nuevoElemento);
    let contenedor = document.getElementById("nuevoTexto");
    contenedor.appendChild(nuevoNodo);
}

function fnCopiar(){
    let copiarNodo = document.getElementById("nuevoTexto");
    copia = copiarNodo.cloneNode(true);
    document.getElementById("copia").appendChild(copia);
}

function fnEliminar(){
    let eliminarNodo = document.getElementById("nuevoTexto");
    eliminarNodo.parentNode.removeChild(eliminarNodo);
}

let btn7 = document.getElementById('btnCrear');
btn7.addEventListener('click', fnCrear);

let btn8 = document.getElementById('btnEliminar');
btn8.addEventListener('click', fnEliminar);

let btn9 = document.getElementById('btnCopiar');
btn9.addEventListener('click', fnCopiar);

//ejem13: Manipulación de imágenes
 //IMPRIMIR NÚMERO DE IMÁGENES
const imgUno = document.querySelector("#imgU");
const imgDos = document.querySelector("#imgD");
const imgTres = document.querySelector("#imgT");
const imgCuatro = document.querySelector("#imgC");

function muestra(num) {
    let imagen = document.images[num].src
    let grande = document.images["pantalla"]
    grande.src = imagen
}

imgUno.addEventListener("click",()=> muestra('primera'));
imgDos.addEventListener("click",()=> muestra('segunda'));
imgTres.addEventListener("click",()=> muestra('tercera'));
imgCuatro.addEventListener("click",()=> muestra(4));

// Ejm:14. Crear una lista de elementos
let listaElementos = document.querySelector("#elementos");

// mostrar un elemento de la lista en particular
// console.log(listaElementos.children[2]);
// listaElementos.children[2].style.backgroundColor = "green";

//Enviar el evento submit
let form = document.querySelector("#frmLista");
form.addEventListener("submit", fnAgregarElemento);
// Eliminar evento
listaElementos.addEventListener("click", fnEliminarElemento);

// Listado de funciones
function fnAgregarElemento(evento){
    evento.preventDefault();
    // capturar el valor de la caja de texto
    let newElement = document.getElementById("txtElemento").value;
  
    // crear un nuevo elemento de lista li
    let li = document.createElement("li");
    // crear un nuevo elemento de botón
    let btnDelete = document.createElement("button");
   
    // agregar elementos a las clases
    li.className = "list-group-item";
    btnDelete.className = "btn btn-light btn-outline-danger btn-sm float-end delete"

    // agregar el nodo de textoNode    
    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode("X"));

    listaElementos.appendChild(li);
    li.appendChild(btnDelete);
}

function fnEliminarElemento(evento){
    if(evento.target.classList.contains("delete")){
        if(confirm("¿Seguro de eliminar Elemento?")){
            let li = evento.target.parentElement;
            listaElementos.removeChild(li);
        }
    }

}








