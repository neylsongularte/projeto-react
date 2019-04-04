const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017';
const dbName = 'biologiaTotal';

async function getMongoDB(callback) {
    const client = new MongoClient(url);
    await client.connect();
    const db = client.db(dbName);

    await callback(db);

    client.close();
}

module.exports = getMongoDB;
