const dbconnect = require('./mongodb')

async function inser(){
    const db = await dbconnect();
    const data = await db.insertOne({
        name:"aman",
        age:20,
        lastname:"sharma"
    });
    console.log(data)
}
inser();