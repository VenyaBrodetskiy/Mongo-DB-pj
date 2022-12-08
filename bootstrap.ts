import { connect } from "./mongoose/mongoose";

export const bootstrap = async (callback: Function) => {
    await connect();
    console.log("MongoDb connected");
    callback();
}