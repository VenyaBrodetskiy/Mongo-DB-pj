import { IStudent } from "../interface";
import { StudentModel } from "../models/model";

export const AddStudent = async (student: IStudent) => {
    let nStudent = new StudentModel(student);
    let result = await nStudent.save();
    return result;
};