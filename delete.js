const dbConnect=require('./mongodb');

const deleteData=async()=>{
 let data=await dbConnect();
 let result=await data.deleteOne({name:"sunil"})
 console.log(result)
 if(result.acknowledged){
    console.log("data deleted successfully");
    if(result.deletedCount==0){
        console.log("no data present")}
 } 
}

deleteData()