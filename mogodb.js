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
   // creating ID's
   // const id=new ObjectId()
   // console.log(id)
   // console.log(id.getTimestamp())

//Insertion

   // db.collection('user').insertOne({
   // 	_id:id,
   // 	name:'Vikram Kunwar',
   // 	age:21
   // },function(error,result){

   // 	if(error){
   // 		return console.log(error)
   // 	}
   // 	console.log(result.ops)
   // 	console.log(result.insertedId)
   // 	console.log(result.insertedCount)

   // })
 //   db.collection('user').insertMany([
 //   {
 //   	name:'Akshay Anand',
 //   	age:20
 //   },
 //   {
	// name:'Sanjana ',
 //   	age:20
 //   }
   	

 //   	],function(error,result){

 //   		if(error){
 //   			return console.log(error)
 //   		}
 //   		else{
 //   			console.log(result.ops)
 //   			console.log(result.insertedIds)
 //   		}

 //   })

      // db.collection('tasks').insertMany([
      // {
      // 	description:'Lunch',
      // 	completed:true
      // },
      // {
      // 	description:'Study',
      // 	completed:false
      // }],function(error,result){
      // 	if(error){
      // 		return console.log('error')
      // 	}
      // 	console.log(result.ops)
      // })


//Fetching

  
    // db.collection('user').findOne({name:'Sanjana '},function(error,user){

    // 	if(error){
    // 		return console.log(error)
    // 	}
    // 	else{
    // 		console.log(user)
    // 	}

    // })

    // db.collection('tasks').findOne({description:'Study'},function(error,task){
    // 	if(error){
    // 		return console.log('error')
    // 	}
    // 	console.log(task)
    // })

    // db.collection('tasks').find({completed:false}).toArray(function(error,tasks){
    // 	if(error){
    // 		return console.log('error')
    // 	}
    // 	console.log(tasks)
    // })



 //updating


    


})

