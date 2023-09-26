const { MongoClient, ObjectId } = require("mongodb");

// Replace the uri string with your connection string.
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const databaseName = client.db("task-manager");

async function run() {
    try {
        await client.connect();

        const users = databaseName.collection("users");
        const tasks = databaseName.collection("tasks");

    } catch (error) {
        console.error("Error: ", error);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);