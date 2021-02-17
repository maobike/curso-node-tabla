const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {
        let salida, mostrar = '';
        
        console.log('===================='.red);
        console.log(colors.bgBrightYellow('    Tabla del: ' + base + '    '));
        console.log('===================='.red);
    
        for (let index = 1; index <= hasta; index++) {
            salida  += `${base} x ${index} = ${base * index}\n`;
            mostrar += `${base} ${ 'x'.red} ${index} ${ '='.blue} ${base * index}\n`;
        }
        
        if (listar) {
            console.log(mostrar);
        }
        
        fs.writeFileSync(`./files/tabla-${base}.txt`, salida);
        
        return (`Archivo tabla del ${base}`.rainbow);
        
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}