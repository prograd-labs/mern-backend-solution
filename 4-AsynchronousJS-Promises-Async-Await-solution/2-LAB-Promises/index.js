const fs = require('fs');
const superagent = require('superagent');

const readFilePromise = (fileName)=>{
  return new Promise((resolve,reject)=>{
    fs.readFile(fileName,(err,data)=>{
      if(err) reject('Not found');
      resolve(data);
    })
  })
}


const writeFilePromise = (file,data)=>{
  return new Promise((resolve,reject)=>{
    fs.writeFile(file,data,err=>{
      if(err) reject("Could not write")
      resolve('Successfully Written')
    })
  })
}

readFilePromise(`${__dirname}/dog.txt`)
  .then(data=>{
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)})
  .then(result=>{
    return writeFilePromise('dog-img.txt',result.body.message)})
  .catch(err=>{
    console.log(err)
  });
