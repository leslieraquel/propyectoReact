//objetos literales
// construyendo obejetos
const persona = {
    nombre: 'Toni',
    apellido:'stark',
    edad:25,
    //podemos añadir obejtos dentro del mismo, tambien se puede agrgar funciones:
    direccion: {
        ciudad:'new york',
        lat:'022255'
    }

};

// para hacer un clon de un objeto como tal debemos hacerlo con tres puntos al frente y el objeto que se quiere hacer la copia
const persona2 = {...persona}
persona2.nombre = 'Peter';

// de esta forma se imprimira los objetos pero con los valores cambiados
console.log(persona2)
console.log(persona);