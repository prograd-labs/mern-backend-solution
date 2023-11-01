// import fs module....
const fs = require('fs');

// creating a readable stream...
const readableStream = fs.createReadStream('./file.txt', { highWaterMark : 25 });

// Will store the count of chunk, recieved....
let countStreamChunksSoFar = 0;

readableStream.on("data",(chunk) => {
    countStreamChunksSoFar++;

    if(countStreamChunksSoFar > 5) {
        setTimeout(() => {
            console.log(`New Chunk ${countStreamChunksSoFar} `, chunk.toString());
        },2000)
    }
    else {
        console.log(`New Chunk ${countStreamChunksSoFar} `, chunk.toString());
    }
})
