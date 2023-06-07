const {MongoClient} = require('mongodb');


async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://hdzjoshii:root@cluster0.gyqd0ka.mongodb.net/ffc?retryWrites=true&w=majority";
 

    const client = new MongoClient(process.env.DB);
    
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
 
        // Make the appropriate DB calls
       // await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    module.exports = client;
}



main().catch(console.error);



