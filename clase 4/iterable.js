const connection = Object.freeze({DB_USER: 'JENNY', DB_NAME:'JENNY', DB_PASSWORD:'123456'})
console.log (connection)
connection.DB_NAME ="a"
console.log (connection)

/*function crearIterador(arreglo) {
    var siguienteIndice = 0

    return {
        next:function(){
            return siguienteIndice < arreglo.length ? {value: arreglo[siguienteIndice++], done:false} :
            {done:true}
        }
    }
}

var it = crearIterador(['yo','ya']);
console.log(it.next().value);
console.log(it.next.value);
console.log(it.done)*/




function crearIterador(arreglo) {
    var siguienteIndice = 0

    return {
        next:function(){
            return siguienteIndice < arreglo.length ? {value: arreglo[siguienteIndice++], done:false} :
            {done:true}
        }
    }
}

const iterator = crearIterador(Array.from(Array(10)).map(x=> Math.random()*5));

let valor = iterator.next();

while(!valor.done) {
    console.log(valor.value)
    valor = iterator.next();
}