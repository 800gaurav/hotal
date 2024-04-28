const dbconnect = require('./mongodb')

async function updatedata(){
    const data = await dbconnect();
    const result = await data.updateOne(
        {name:"aman"},{
            $set: {name:"amansharma"}
        }
    )
    console.log(result)
}

updatedata()