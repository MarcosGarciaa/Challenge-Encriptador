const entrada = document.querySelector(".entrada");
const salida = document.querySelector(".salida");
const botonEncriptar = document.querySelector(".encriptar");
const botonDesencriptar = document.querySelector(".desencriptar")
const botonCopiar = document.querySelector(".copiar");
const palabras = [["enter","imes","ai","ober","ufat"], ["e","i","a","o","u"]];

function encriptar(texto){

    var posicion = 0;
    texto = texto.toLowerCase();

    while(posicion<=4){
        if(texto.includes(palabras[1][posicion])){
            texto = texto.replaceAll(palabras[1][posicion],palabras[0][posicion]);
        }
        posicion++;
    }  
    return texto;

}

function desencriptar(texto){

    let posicion = 0;
    texto = texto.toLowerCase();

    while(posicion<=4){
        if(texto.includes(palabras[0][posicion])){
            texto = texto.replaceAll(palabras[0][posicion],palabras[1][posicion]);
        }
        posicion++;
    }
    return texto;

}

function mostrarEncriptado(){

    const mostrar = encriptar(entrada.value);
    salida.value = mostrar;
    salida.style.backgroundImage = "none";
    
}

function mostrarDesencriptado(){

    const mostrar2 = desencriptar(entrada.value);
    salida.value = mostrar2;
    salida.style.backgroundImage = "none";
    
}

function copiarTexto(){
    let portapapeles = document.querySelector(".salida");
    portapapeles.select();
    document.execCommand("copy");
}