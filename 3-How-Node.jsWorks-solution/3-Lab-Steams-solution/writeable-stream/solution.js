const fs = require("fs");
const axios = require('axios'); 
const writeableStream = fs.createWriteStream('./new-file.txt');

(async function getData() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');    
    const data = response.data;
    for(const todo of data) {
        writeableStream.write(todo.title);
    }
})()
