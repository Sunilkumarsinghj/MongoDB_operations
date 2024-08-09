const express = require('express');
const dbConnect= require('./mongodb');
const mongoObjectId=require('mongodb');
const app=express();
app.use(express.json())
app.get('/',async(req,resp)=>{
    let data= await dbConnect();
     data= await data.find().toArray();
    console.log(data);
   resp.send(data)
}) //this is called routing

app.post('/',async(req,resp)=>{
    console.log(req.body)
    let data=await dbConnect();
    let result=await data.insertOne(req.body)
    resp.send(result)
})

app.put('/',async (req,resp)=>{                        // '/:name'    and   params or body  
    let data= await dbConnect();
    let result=await data.updateOne({name:req.body.name},{$set:req.body});
    resp.send({result});
})

app.delete('/:id',async(req,resp)=>{              //name:req.body.name   it is also ok
  let data=await dbConnect();
  result= await  data.deleteMany({_id:new mongoObjectId.ObjectId(req.params.id)});    
  resp.send(result);
  if(result.deletedCount==0){
  console.log('done')
}else if(result.deletedCount==1){
  console.log("data deleted successfully:"+result.deletedCount);
}
})

 app.listen(5000); 