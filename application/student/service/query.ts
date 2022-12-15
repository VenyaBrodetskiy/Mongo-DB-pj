
import { IStudent } from "../interface";
import { StudentModel } from "../models/model";

export const getStudents = async (): Promise<IStudent[]> => {
    let res = await StudentModel.find().select({ firstName: 1, lastName: 1, age: 1, _id: 1 }).lean();
    return res;
};

export const getStudentsByName = () => { };