const { MongoClient, ServerApiVersion } = require("mongodb");

let db;


const connectDB = async () => {
  if (db) return db;

  try {
    const uri = `mongodb+srv://${process.env.NEXT_PUBLIC_MONGODB_USERNAME}:${process.env.NEXT_PUBLIC_MONGODB_PASSWORD}@cluster0.cp5mulo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    });
    db = client.db("NextHeroDB");
    return db;
  } catch (error) {
    console.log(error);
  }
}

export default connectDB;