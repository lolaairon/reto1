/*Crea un fichero llamado libreriaVector.js con las siguientes funciones:

1. crearVector(n, m): Crea un vector de n números aleatorios que van desde 0 hasta m.*/

function crearVector(n,m){
let resul = [];
for(let i= 0 ; i<n ; i++){
    resul[i]=Math.round(Math.random()*m)
}
return resul
}
//console.log(crearVector(5,10));

/*
2. sumaVector(v1, v2): Suma dos vectores v1 y v2 si y solo si tienen el mismo numero de
elementos.*/

function sumaVector(v1, v2,v3){

    let resul1=[];
    for ( let i = 0 ; i< v1.length ; i++){
        if(v1.length == v2.length ){
            resul1[i] = v1[i] + v2[i] +v3[i];
        }
     }return resul1
}
//console.log(sumaVector([1,2,3],[1,2,3],[1,2,3));

//3. productoNumeroVector(n, v): Multiplica el vector v por el numero n.

function productoNumeroVector(n, v){
    let resul1=[];
    for(let i = 0; i<v.length;i++){
    
            resul1[i] = n * v[i];
 
}return resul1
}
//console.log(productoNumeroVector([1,2,3],[1,2,3]));
/*
4. restaVector(v1, v2): Resta dos vectores v1 y v2 si y solo si tienen el mismo numero de
elementos.*/ 
function restaVector(v1, v2){

    let resul1=[];
    for ( let i = 0 ; i< v1.length ; i++){
        if(v1.length == v2.length){
            resul1[i] = v1[i] - v2[i];
        }else{'No tienen los mismos parametros'}
     }return resul1
}
//console.log(restaVector([1,2,3],[1,2,3]));

/*
5. productoVector(v1, v2): Multiplica dos vectores v1 y v2 si y solo si tienen el mismo número
de elementos*/ 
function productoVector(v1, v2){

    let resul1=[];
    for ( let i = 0 ; i< v1.length ; i++){
        if(v1.length == v2.length){
            resul1[i] = v1[i] * v2[i];
        }else{'No tienen los mismos parametros'}
     }return resul1
}
//console.log(productoVector([1,2,3,4],[1,2,3,4]));

/*Crea un nuevo fichero que llame a las funciones definidas en el fichero libreríaVector.js y
prueba todas sus funciones. */
module.exports = {crearVector , sumaVector , productoNumeroVector , restaVector,productoVector} ;