const dbconnect = require('./mongodb')

async function deleteData(){
    const data = await dbconnect();
    const result = await data.deleteOne({name:"gaurav"});
    console.log(result)
}
deleteData();