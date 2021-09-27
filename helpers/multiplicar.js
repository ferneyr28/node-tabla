//implementadndo libreria manejo de archivos. filesystem
const fs = require("fs");
const colors = require('colors');

// const crearArchivo = (base = 5) => {
//   return new Promise((resolve, reject) => {
//     // imprima la tabla del 5 en la consola  5 x 1
    
//     try {
//         console.clear();
//         console.log("====================");
//         console.log(`     Tabla del: ${base}     `);
//         console.log("====================");
    
//         let salida = "";
    
//         for (let i = 1; i <= 10; i++) {
//           salida += `${base} x ${i} = ${base * i}\n`;
//         }
//       fs.writeFileSync(`tabla${base}.txt`, salida);
//       resolve(`tabla${base}.txt`)
//     } catch (err) {
//       throw err;
//     }
//     // console.log(fs.writeFileSync(`tabla${base}.txt`, salida));

//     // if (fs.writeFileSync(`tabla${base}.txt`, salida)) {
//     //   resolve(` archivo creado tabla${base}.txt`);
//     // } else {
//     //   reject(`No se pudo crear el archivo`);
//     // }
//   });
// };


const crearArchivo = async (base = 5, listar=false, hasta=10) => {
    
      // imprima la tabla del 5 en la consola  5 x 1
      
      try {

            
      
          let salida = "";
      
          for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
          }

          if(listar) {
                
            console.clear();
            console.log("====================");
            console.log(`     Tabla del: ${base}     `.underline.red);
            console.log("====================");

            console.log(salida.rainbow);
        }

        fs.writeFileSync(`./salida/tabla${base}.txt`, salida);
        return `tabla${base}.txt`.green
      } catch (err) {
        throw err;
      }
      // console.log(fs.writeFileSync(`tabla${base}.txt`, salida));
  
      // if (fs.writeFileSync(`tabla${base}.txt`, salida)) {
      //   resolve(` archivo creado tabla${base}.txt`);
      // } else {
      //   reject(`No se pudo crear el archivo`);
      // }

  };


module.exports = {
  crearArchivo,
};
