
let notas = new Array;
let min = 0;
let max = 0;
let prom = 0;


function cargarNotas(){
    notas[0] = parseInt(document.getElementById("nota1").value);
    notas[1] = parseInt(document.getElementById("nota2").value);
    notas[2] = parseInt(document.getElementById("nota3").value);
    notas[3] = parseInt(document.getElementById("nota4").value);

    console.log(notas)
}

function calcular(){
   
    min = notas[0];
    max = notas[0];
    prom = notas[0];

    for(let i = 1 ; i < notas.length; i++){
         if (notas[i] < min ){
            min = notas[i];
         }
         if (notas[i] > max ){
            max = notas[i];
         }
         prom = prom + notas[i]
    }
    prom = prom / notas.length;

    mostrarCalculo(min, max, prom)
    
}

function mostrarCalculo(minimo, maximo, promedio){

    document.getElementById("min").innerHTML= "La nota mas baja es:  " + minimo;
    document.getElementById("max").innerHTML= "La nota mas alta es:  " + maximo;
    document.getElementById("prom").innerHTML= "El promedio es :  " + promedio;

    

}