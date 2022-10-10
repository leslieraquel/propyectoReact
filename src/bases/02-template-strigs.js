console.log("primer proyecyo de react");
let nombre = "Raquel";
let apellido = "Guaman";
// template string: sirve para concatenar strings,operaciones y también funciones
// ejemplo con Strings y operacion de una suma basica
console.log(`HOLA ${nombre} ${apellido} probando suma ${1+1}`);

//funciones 
function getSaludo(nombre){
    return `Hola ${nombre}`
}
console.log(`Mendaje: ${getSaludo(nombre)}`)

