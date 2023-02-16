class persona{
    constructor(nombre,genero){
    this.nombre=nombre;
    this.genero=genero;


}
}
let dato = prompt("ingresa el nombre");
let datocompuesto = this.nombre = dato;
function saludo() {
    return `buenos dias ${datocompuesto}`
}
  saludo()  


class doctor extends persona{
    constructor(nombre,genero,edad,apellido){
        super(nombre,genero)
        this.edad=edad;
        this.apellido = apellido

    }
    presentar() {
        return `soy ${datocompuesto} ${this.apellido} y temgo ${this.edad}`
    }
    
}
const sall =  new doctor();