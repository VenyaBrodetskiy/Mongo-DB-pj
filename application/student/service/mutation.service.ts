import { isValidObjectId } from "mongoose";
import { IStudent } from "../interface";
import { StudentModel } from "../models/model";

export const addStudent = async (student: IStudent) => {
    let nStudent = new StudentModel(student);
    let result = await nStudent.save();
    return result;
};

export const updateStudent = async (student: IStudent) => {
    let updateResult = await StudentModel.updateOne(student);
    if (updateResult.acknowledged) {
        return updateResult;
    } else {
        return null;
    };
};

export const deleteStudent = async (id: string) => {

    if (isValidObjectId(id)) {
        const result = await StudentModel.deleteOne({ _id: id });
        return true;
    }

    return false;
};

export const deleteStudentAsync = async (firstName: string, lastName: string, age: number) => {
    if (firstName && lastName && age) {
        const query = { firstName: firstName, lastName: lastName };
        const result = await StudentModel.deleteMany(query);
        return result.acknowledged;
    }
    return false;
}