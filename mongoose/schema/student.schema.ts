import { Schema } from "mongoose";

const studentSchema = new Schema({
    firstName: { type: String, require: true },
    lastName: String,
    age: Number,
});

const validateFirstName = (firstName: string) => {
    return firstName && firstName.length > 3;
};

studentSchema.path("firstName").validate(validateFirstName);

export { studentSchema };