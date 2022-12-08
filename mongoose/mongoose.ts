import mongoose, { Mongoose } from "mongoose";

const connectionString = process.env.DB_CONNECTIONSTRING as string;

export let db: Mongoose;
export const connect = async () => {
    db = await mongoose.connect(connectionString);
}