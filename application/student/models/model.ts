import { db as dbMongoose } from "../../../mongoose/mongoose";
import { studentSchema } from "../../../mongoose/schema/student.schema";
import { IStudent } from "../interface";

export const StudentModel = dbMongoose.model<IStudent>("Student", studentSchema, "students");
