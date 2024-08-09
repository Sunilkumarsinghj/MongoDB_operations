const dbConnect =require('./mongodb');

const updateData=async ()=>{
  let data =await dbConnect();
  let result =await data.updateMany(
    {name:"one plus 12r"},
    {$set:{price:40000}})                                       /*remember updateOne function will take 2 obejcts {name:""},{$set:{}}*/
  console.log(result)
}
updateData()