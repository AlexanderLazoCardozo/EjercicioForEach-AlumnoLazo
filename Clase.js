const alumnos = [
    {
      nombre: 'Juan',
      carrera: 'Biología',
      nota: 16
    },
    {
      nombre: 'Jose',
      carrera: 'Enfermero',
      nota: 10
    },
      {
      nombre: 'Luis',
      carrera: 'Policía',
      nota: 07
    }
    ,
      {
      nombre: 'Maria',
      carrera: 'Secretariado',
      nota: 10
    },
    {
      nombre: 'Hugo',
      carrera: 'Enfermero',
      nota: 15
    },
      {
      nombre: 'Rosa',
      carrera: 'Enfermero',
      nota: 12
    }
    ,
      {
      nombre: 'Luisa',
      carrera: 'Biología',
      nota: 18
    }
  ]

let aprobado=0
let desaprobado=0
let ac=0
let acapro=0
let desapro=0

alumnos.forEach(function(element, indice) {
  ac=ac+element.nota
    if(element.nota>=13){
        aprobado=aprobado+1
        acapro=acapro+1
    }else {
        desaprobado=desaprobado+1
        desapro=desapro+1
    }  
    if (indice%2==0){

      console.log(`Mi nombre es ${element.nombre} y mi carrera es ${element.carrera}.`)
    }
})

let prom1 = acapro % alumnos.length
let prom2 = desapro % alumnos.length
let prom3 = ac % alumnos.length
console.log(`Hay ${aprobado} alumnos aprobados y ${desaprobado} alumnos desaprobados`)
console.log(`El promedio de aprobados es ${prom1}, el promedio de desaprobados es ${prom2} y el promedio total es ${prom3}`)

const alfilt = alumnos.filter(alumno => alumno.nota < 13);
console.log(alfilt)

let newal = alumnos.map(function(x) {
  return x.nota * 3 / 2
})

console.log(newal)