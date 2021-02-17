const argv = require('yargs')
    .option('b', {
        alias : 'base',
        type : 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias : 'listar',
        type : 'boolean',
        demandOption: true,
        default : false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias : 'hasta',
        type : 'number',
        demandOption: true,
        default : 10,
        describe: 'Cantidad de números x la base'
    })
    .check( (argv, options) => {
        if ( isNaN(argv.base)) {
            throw 'La base tiene que ser un número'
        }else{
            return true;
        }
    })
.argv;

module.exports = argv;