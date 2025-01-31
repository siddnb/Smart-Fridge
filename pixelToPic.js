const sharp = require('sharp');
const width = 160;
const height = 120;
var color = { r: [], g: [], b: [] };

function hexToDecimalArray(hexString) {
// Split the hex string into an array of bytes
const hexBytes = hexString.match(/.{1,2}/g);

// Convert each byte from hex to decimal
const decimalArray = hexBytes.map(byte => parseInt(byte, 16));

return decimalArray;
}

function convert (byteSeq, name){
    var decimalArray = hexToDecimalArray(byteSeq);

    let i = 0;
    for(i; i<decimalArray.length/3;i++){
        color.r[i] = decimalArray[i*3]
        color.g[i] = decimalArray[i*3+1]
        color.b[i] = decimalArray[i*3+2]
    }

    // Create a buffer with the RGB values
    const buffer = Buffer.alloc(width * height * 3); // 3 bytes per pixel

    console.log("buffer size = "+ buffer.length)

    for (let i = 0; i < buffer.length/3; i++) {
        buffer[i*3] = color.r[i]; // red
        buffer[i*3 + 1] = color.g[i]; // green
        buffer[i*3 + 2] = color.b[i]; // blue
    }
    // for (let i = 0; i < buffer.length/3; i++) {
    //     buffer[i*15] = color.r[i]; // red
    //     buffer[i*15 + 1] = color.g[i]; // green
    //     buffer[i*15 + 2] = color.b[i]; // blue

    //     for(let j = 0; j<3; j++){

    //     }
    // }

    // Write the buffer to a file
    sharp(buffer, {
        raw: {
        width,
        height,
        channels: 3,
        },
        })
        .toFile(name, (err, info) => {
        if (err) {
            console.error(err);
        } else {
            console.log(info);
        }
    });
}

module.exports = {convert};