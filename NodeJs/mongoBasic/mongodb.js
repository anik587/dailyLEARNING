const { MongoClient, ObjectId} = require('mongodb')
const id =  new ObjectId()
// working with id
console.log(id)
console.log(id.getTimestamp())
console.log(id.id)
console.log(id.toHexString())


const connectionURL = 'mongodb://127.0.0.1:27017'
const database = 'task-manager'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (error, client)=>{
      if(error)
        return console.log('Error occurred ! unable to connect')
        console.log('Connected Successfully')

      const db = client.db(database)

    // store data to mongoDB
      /*db.collection('users').insertMany([{
          _id: id,
          name: 'an234234ik',
          age: 294,
      },{
          name: 'M234234234J',
          age: 2943
      }], (error, result)=>{
            if(error)
            return console.log('Failed to insert data')

            console.log(result.ops)
            console.log(result.insertedIds)
          
      })*/

    // fetch data from mongoDB
    /*db.collection('users').findOne({name: 'an234234ik'}, (error, user)=>{
        if(error)
            return console.log('Failed to fetch data')
        console.log(user)
    })


    db.collection('users').findOne({_id: new ObjectId('5d8b2a50b79c402eb811cf1d')}, (error, user)=>{
        if(error)
            return console.log('Failed to fetch data')
        console.log(user)
    })

    db.collection('users').find({age: 294}).toArray((error, user)=>{
        if(error)
            return console.log('Failed to fetch data')
        console.log(user)
    })

    db.collection('users').find({age: 294}).count((error, count)=>{
        if(error)
            return console.log('Failed to fetch data')
        console.log(count)
    })*/

    //update data into mongoDB

    /*const updateCollection = db.collection('users').updateOne({
        _id: new ObjectId('5d8b2a50b79c402eb811cf1d')
    }, {
        $set : {
            name: 'mssike'
        },
        $inc : {
            age : 100
        }
    }).then((result)=>{
        console.log(result)
    }).catch(error => {
        console.log(error)
    })*/

   /* const updateCollection = db.collection('users').updateMany({
        name: 'an234234ik'
    }, {
        $set : {
            name: 'mssike'
        },
    }).then((result)=>{
        console.log(result)
    }).catch(error => {
        console.log(error)
    })*/

   // delete from mongoDB

    db.collection('users').deleteMany({
        name: 'mssike'
    }).then((result)=>{
        console.log(result)
    }).catch(error =>{
        console.log(error)
    })

})

