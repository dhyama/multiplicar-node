const fs = require('fs'); //Cargamos el módulo de filesystem para trabajar con ficheros.
const colors = require('colors'); //Cargamos el módulo para aplicar colores.

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`${base} no es un número.`);
            return; //Tenemos que colocar el return para que no continuemos ejecutando el código.
        }
        for (let i = 1; i <= limite; i++) {
            let result = base * i;
            data += `${base} * ${i} = ${result}\n`; // Salto de línea \n
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`)
        });

    });
}

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';

        if (!Number(base)) {
            reject(`${base} no es un número.`);
            return; //Tenemos que colocar el return para que no continuemos ejecutando el código.
        }

        data += '========================\n'.green;
        data += `====  Tabla del ${base}  ====\n`.green;
        data += '========================\n'.green;
        for (let i = 1; i <= limite; i++) {
            let result = base * i;
            data += `${base} * ${i} = ${result}\n`; // Salto de línea \n
        }
        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}