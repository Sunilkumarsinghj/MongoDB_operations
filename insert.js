const dbConnect =require('./mongodb');

const insert=async ()=>{
     const db= await dbConnect();
     const result=await db.insertMany(
        [
        {name:'lava agni',brand:'lava',price:19000,category:'phone'},
        {name:'iqoo 7 pro ',brand:'iqoo',price:25000,category:'phone'},
        {name:'moto e20',brand:'motorola',price:29000,category:'phone'},
         ]
        )

  if(result.acknowledged){
    console.log('done')
  }
    
}

insert();   