// const MongoClient=require('mongodb').MongoClient;    //  same
const {MongoClient}=require('mongodb');              // same 
const url= 'mongodb://localhost:27017';
const database='e-comm';
const products='products'
const client = new MongoClient(url);
async function dbConnect(){
    let result= await client.connect();
    let db= result.db(database)        //your database name will be in db() FUNCTION
    return db.collection(products);   // your collection name will be in .collection() FUNCTION

}   
module.exports =dbConnect;