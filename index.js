 const dbConnect=require('./mongodb')

  dbConnect().then((resp)=>{
    resp.find().toArray().then((realData)=>{
        console.log(realData)
    })
  })
// // console.log(dbConnect())

// const main= async ()=>{
// let data= await dbConnect();
// data= await data.find().toArray();
// console.log(data)
// }

// main();





















// let express = require('express');
// let app =express();
// const reqFilter=require('./middleware')
// // app.use(reqFilter); 
// const route= express.Router();
// route.use(reqFilter);
// app.get('/',(req,resp)=>{
//     resp.send('we   lcome to home page')
// })

// app.get('/users',(req,resp)=>{
//     resp.send('welcome to user page')
// })

// route.get('/about',(req,resp)=>{
//     resp.send('ABOUT Page is here.')
// })


// route.get('/contact',(req,resp)=>{
//     resp.send('contact us page is loading up.')
// })
// app.use('/',route);    
// app.listen(8000)