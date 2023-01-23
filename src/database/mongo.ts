import { MongoClient as Mongo, Db } from "mongodb";

export const MongoClient = {
    client: undefined as unknown as Mongo,
    db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGO_URL || 'localhost/27017';
    const username = process.env.MONGO_USER;
    const password = process.env.MONGO_PASS;

    const client = new Mongo(url, {auth: {username: username, password: password}});
    const db = client.db('users')

    this.client = client
    this.db = db
    
    console.log('connected to db')
  },
};
