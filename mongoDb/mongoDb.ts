import { Db, MongoClient } from "mongodb";

const connectionString = process.env.DB_CONNECTIONSTRING as string;

const client = new MongoClient(connectionString);
export let db: Db;

export const connect = async () => {
    await client.connect();
    db = client.db("MongoDb");
    let collections = await db.collections();

    let collectionStudents = collections.find(
        (c) => c.collectionName === "students");

    let collectionCourses = collections.find(
        (c) => c.collectionName === "courses");

    if (!collectionStudents) {
        db.createCollection("students");
    }

    if (!collectionCourses) {
        db.createCollection("courses");
    }
}
