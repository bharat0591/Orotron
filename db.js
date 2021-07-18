const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb+srv://testuser:123*test@cluster0.z6xqn.mongodb.net/demo?retryWrites=true&w=majority';
const dbName = 'store'

let db

const init = () =>
  MongoClient.connect(connectionUrl, { useNewUrlParser: true }).then((client) => {
    db = client.db(dbName)
  })

const insertItem = (item) => {
  const collection = db.collection('htmlData')
  return collection.insertOne(item)
}

module.exports = { init, insertItem }
