const { option } = require('yargs');

//importando libreria de yargs
const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    // demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en la consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    describe: 'Perimte ingresar hasta que limite va la tabla',
                    default: 10
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .check((argv, options) => {
                    if(isNaN(argv.h)) throw 'El limite debe ser numero'
                    return true;
                })
                .argv;

module.exports = argv;          