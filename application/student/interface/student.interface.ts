import { ObjectId } from "mongodb";

export interface IStudent {
    _id?: ObjectId;
    firstName: string;
    lastName: string;
    age: number;
}