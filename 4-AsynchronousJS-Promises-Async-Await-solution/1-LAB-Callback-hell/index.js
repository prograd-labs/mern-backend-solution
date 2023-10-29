const fs = require('fs');
const superagent = require('superagent');

fs.readFile(`${__dirname}/dog.txt`,(err,data)=>{
  console.log(`${data}`)
  superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
  .end((err,res)=>{
    fs.writeFile('dog-img.txt',res.body.message,err=>{
      console.log(res.body.message)
    })
  })
})