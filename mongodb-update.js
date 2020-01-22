const mongodb=require('mongodb')
const MongoClient =mongodb.MongoClient
const ObjectId=mongodb.ObjectId

const url='mongodb://127.0.0.1:27017'
const dbname='task-manager'

MongoClient.connect(url,{useNewUrlParser:true,useUnifiedTopology:true},function(error,client){
   
   if(error){
   	return console.log('unable to connect to database ',error)
   }
   console.log('connection successfull')

   const db=client.db(dbname)

   db.collection('user').updateOne({
    _id:new ObjectId('5e27fe4deb5b9a3238b7a4cd')
   },{

    $set:{
      name:'sanjana venkatesh'
    }

   },function(error,result){

    if(error){
      return console.log('error')
    }
    console.log(result)

   })






})

