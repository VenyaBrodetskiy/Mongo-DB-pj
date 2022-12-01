import { connect } from "./mongoDb/mongoDb";

export const bootstrap = async (callback: Function) => {
    await connect();
    console.log("MongoDb connected");
    callback();
}