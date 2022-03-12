//var Emitter = require ('./emitter');
var Emitter = require('events');
var config = require('./config.js')
var emtr = new Emitter();

emtr.on(config.events.GREET,() => {
    console.log('somewhere, someone said hello')
});

emtr.on(config.events.GREET, () => {
    console.log('A greeting ocurred!');
});

console.log('hello!');
emtr.emit('greet');
//se agrega el modulo de emitter y despueés creamos dos funciones con el mismo nombre pero diferente respuestas
//practica 8, Se agrega otro modulo con la palabra clave para exportarlo y así evitar errores al escribirlo
emtr.on(config.events.JUMP, () => {
    console.log('someone jumped!');
});
emtr.emit('jump');
//ahora se la cambia el nombre a jump