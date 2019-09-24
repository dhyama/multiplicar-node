/**
 * Clase para la utilizaxion de módulos externos
 */

const argv = require('./config/yargs').argv;
const colors = require('colors/safe'); //Libreria que nos permite poner colores de forma segura (por si hubiese variables que se llamasen igual que el color)

// 1º Sin destructuración
// const multiplicar = require('./multiplicar/multiplicar');

// 2º Con destructuración
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let base = 'e'; // -> probocamos un error
// let base = 1;

// console.log(multiplicar);
// console.log(process.argv);

//Obtención de los parametros desde la linea de comandos
// let argv2 = process.argv; //process nos devuelve los parametros de la aplicacion
// let parametro = argv[2]; //Los dos primeros parametros son el path de Node y el path de la aplicacion, por lo que cojemos el trecero
// let base = parametro.split('=')[1]; //convertimos en un arreglo el parametro para tener parametro valor y nos quedamos con el valor

let comando = argv._[0];
switch (comando) {
    case 'listar':
        console.log(colors.yellow(`${comando}`));
        listarTabla(argv.base, argv.limite)
            .then(res => console.log(res))
            .catch(err => {
                console.log(err);
            });
        break;
    case 'crear':
        console.log(colors.yellow(`${comando}`));
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(err => {
                console.log(err);
            })
        break;
    default:
        // console.log('Comando no reconocido.'.red)
        console.log(colors.red('Comando no reconocido.'));
}

console.log(colors.blue('Base'), argv.base);
console.log(colors.blue('Límite'), argv.limite);
// console.log(argv2);
// console.log(base);

// 1º Sin destructuración
// multiplicar.crearArchivo(base)
//     .then(archivo => console.log(`Achivo creado: ${archivo}`));

// 2º Con destructuracion
// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${archivo}`))
//     .catch(err => {
//         console.log(err);
//     })