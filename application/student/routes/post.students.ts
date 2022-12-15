import { Router, Request, Response } from "express";
import { IStudent } from "../interface";
import { addStudent } from "../service";
import { body, validationResult } from "express-validator";

const route = Router();

route.post('/',
    body("firstName").isLength({ min: 3, max: 30 }),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() })
        }
        let student: IStudent = {
            age: req.body.age,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
        let result = await addStudent(student);
        res.send(result);
    });

export { route as postStudentsRoute };