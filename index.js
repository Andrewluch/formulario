/*1- Crear una aplicación de servidor que tenga una lista de animales (un array con objetos) que tendrán nombre, edad y tipo de animal. Cuando vayamos a la raíz (ruta '/') el servidor devolverá el HTML de la lista de animales.*/
/*2- Crear una segunda ruta ('/sumar-animal') que recibirá por query el nombre, el tipo y la edad de un animal. Al recibirlo, se creará un objeto de animal con su información y se añadirá a la lista de animales en el servidor.
*/
/*3- Crear una tercera ruta ('/dejar-animal') en la que mostraremos un formulario en el que el usuario de la página puede introducir el nombre, el tipo y la edad de un animal. Cuando se haga click en el botón del formulario, se enviará la información introducida a la ruta ('/sumar-animal').
*/
/*4- Crear una ruta ('/adoptar') que recibe un nombre de animal por parámetro. Cuando llegue una petición a esta ruta, eliminaremos el animal con este nombre de la lista de animales que hay en el servidor.
*/

const express=require('express');
const app=express();
app.use(express.static('animal')); 
let animales= [{nombre:"pato, tigre",especie:"",edad:""}]

app.get('/sumar-animal',function(req,res){
    let cualquierAnimal=req.query.nombre;
    let cualquierEspecie=req.query.especie;
    let cualquierEdad=req.query.edad;
    res.send(`${cualquierAnimal} + ${cualquierEspecie} + ${cualquierEdad}`);

});

app.get('/animales.html',function(req,res){
    let cualquierAnimal=req.query.nombre;
    let cualquierEspecie=req.query.especie;
    let cualquierEdad=req.query.edad;
    res.send(`${cualquierAnimal} + ${cualquierEspecie} + ${cualquierEdad}`);
    

});

app.get('/adoptar',function(req,res){
    let cualquierAnimal=req.query.nombre;
    let cualquierEspecie=req.query.especie;
    let cualquierEdad=req.query.edad;
    res.send(animales);
});
let animal=[ {nombre:cualquierAnimal},{especie:cualquierEspecie}, {edad:cualquierEdad}];

app.get('/',function(req,res){
    res.send(animales);
});

app.listen(3000);

