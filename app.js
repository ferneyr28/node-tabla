

const { boolean } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear();

// console.log(process.argv);
// console.log(argv)

// console.log('base : yargs', argv.base)
// console.log


// // console.log(process.argv);
// const [, , arg3 = 'base=5' ] = process.argv;
// const [, base = 5] = arg3.split('=');
// // console.log(arg3)
// console.log(base)

crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(archivo, 'creado'))
    .catch(err => console.log(err));





// fs.writeFileSync(`tabla${base}.txt`, salida, (err)=> {
//     if(err) throw error;

//     console.log('tabla-5.txt creada')
// })
// console.log(salida);