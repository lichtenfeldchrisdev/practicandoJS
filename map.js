const numeros = [1,2,3,4,5,6,7,8,9]

const mascotas = [
    {nombre: 'puchito', edad:12 , raza: 'perrito'},
    {nombre: 'chanchito', edad:15 , raza: 'gatito'},
    {nombre: 'puchito', edad:12 , raza: 'perrito'},
    {nombre: 'puchito', edad:12 , raza: 'gatito'}
];

const multiplicados = numeros.map(x => x*2);

const deApares = numeros.map(x => (x,x));

const sumaArray = x =>{
    let acum =0;
    for (let i = 0; i < x.length; i++) {
        acum += x[i]; 
    }
    return acum
}

const edades = mascotas.map(x =>x.edad);
console.log(edades);