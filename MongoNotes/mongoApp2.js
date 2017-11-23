var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/dbfortest";

MongoClient.connect(url,(err,db)=>{
  if(err) throw err;
  console.log(" db create successfully");


  insertData(db,"user").then((message)=>{
    console.log(message);
    return readData(db,"user");
  }).then(result=>{
    console.log(result);
  }).catch(reason=>{
    console.log(reason);
  })


//   db.collection("customer").find({},{name:true}).toArray((err,result)=>{
//       if(err) {console.log("data cant be read");}
//       console.log(result);
// });
  db.close();
})



var insertData=(db,collectionName)=>{

return new Promise((resolve,reject)=>{

  db.createCollection(collectionName);
  var query={name:"ramnivas",age:21};
  db.collection(collectionName).insertOne(query,(err,res)=>{
    if(err) reject("data cant be inserted");
    resolve("data enter successfully");
  });
});
};

var readData=(db,collectionName)=>{
  return new Promise((resolve,reject)=>{
   db.collection(collectionName).find({},{name:true}).toArray((err,result)=>{
   if(err) reject(err);
   resolve(result);

      });
});
}
