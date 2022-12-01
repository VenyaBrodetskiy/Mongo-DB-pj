import { Router, Request, Response } from "express";
import { IStudent } from "../interface";
import { AddStudent } from "../service";

const route = Router();

route.post('/', async (req: Request, res: Response) => {
    let student: IStudent = {
        age: req.body.age,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    }
    let result = await AddStudent(student);
    res.send(result);
});

export { route as postStudentsRoute };