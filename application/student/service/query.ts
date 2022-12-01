import { IStudent } from "../interface/student.interface";
import { StudentCollection } from "../models/model"

export const getStudents = async (): Promise<IStudent[]> => {
    let res = StudentCollection.find();
    let result = await res.toArray() as IStudent[];
    return result;
}

export const getStudentByName = () => { };