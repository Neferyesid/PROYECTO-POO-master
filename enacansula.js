class persona {
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido =apellido;
        this.edad = edad;

        this.obtenerNombre = function(){
            return `me llamo ${this.nombre} ${this.apellido}`
        };

        this.edadDada = function(){
            return this.edad
        };


    }
}