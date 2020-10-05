const numeros = [1,2,3,4,5,6,7,8,9]

const mascotas = [
    {nombre: 'puchito', edad:12 , raza: 'perrito'},
    {nombre: 'chanchito', edad:15 , raza: 'gatito'},
    {nombre: 'puchito', edad:12 , raza: 'perrito'},
    {nombre: 'puchito', edad:12 , raza: 'gatito'}
];

const numerosFiltrados = numeros.filter(x => x>4);

const perros = mascotas.filter(x => x.raza == 'perrito');
const gatos = mascotas.filter(x => x.raza == 'gatito');

console.log(perros);
console.log(gatos);
//El método filter es inmutable, crea otro array nuevo

 