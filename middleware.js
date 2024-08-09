
module.exports= reqFilter =(req,resp,next)=>{
     
    if(!req.query.age){
        resp.send('please enter your age')
    }
    else if(req.query.age<18){
        resp.send('age must be greater than 18')
    }
    else{
        next();
    }

     //untill you don't apply this next() function your page will just loading
    }