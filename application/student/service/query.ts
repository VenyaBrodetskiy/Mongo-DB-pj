import { IStudent } from "../interface";
import { StudentModel } from "../models/model";

export const getStudents = async (): Promise<IStudent[]> => {
    let res = await StudentModel.find().lean();
    return res;
};

export const getStudentsByName = () => { };