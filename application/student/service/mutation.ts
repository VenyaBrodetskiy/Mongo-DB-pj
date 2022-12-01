import { IStudent } from "../interface";
import { StudentCollection } from "../models/model";

export const AddStudent = async (student: IStudent) => {
    let result = await StudentCollection.insertOne(student);

    if (result.acknowledged) {
        return { ...student, _id: result.insertedId }
    }
    return null;
};