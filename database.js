const { MongoClient } = require('mongodb')
const config = require('./config')

let database = null 

async  function startDatabase() {
    const mongoDBURL = config.connectionString
    const connection = await MongoClient.connect(mongoDBURL, { useNewUrlParser : true, useUnifiedTopology : true  })
    database = connection.db() 
}

async function getDatabase(){
    if(!database) await startDatabase()

    return database
}

module.exports = {
    startDatabase, 
    getDatabase
}