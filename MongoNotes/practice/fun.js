var fs=require('fs');

var readData=(file)=>{

  return new Promise((resolve,reject)=>{
    fs.readFile(file,'utf8',(err,data)=>{
      if(err) reject("error in file reading");
       resolve(data);
    });

  })
}



var writeData=(file)=>{

  return new Promise((resolve,reject)=>{
    fs.writeFile(file,"asdfghjkl",(err)=>{
      if(err) reject('error in writing');
      resolve("data written successfully")
    });
    });

}



writeData('xyz.txt').then(message=>{
  console.log(message);
  return readData('xyz.txt')
}).then(message=>{
  console.log(message);
}).catch(reason=>{
  console.log(reason);
})
