var bandera = false;
console.log(typeof bandera);

function miFunction() {
    console.log(typeof miFunction);
}

var simbolo =   Symbol("mi simbolo");
console.log(typeof simbolo);

class Persona{
    constructor(nombre, apellido) {
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof Persona);

var x;
console.log(typeof Persona);

x= undefined;
console.log(typeof x);