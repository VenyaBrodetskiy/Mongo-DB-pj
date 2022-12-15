import { updateStudent } from './../service/mutation';
import { Router, Request, Response } from "express";
import { IStudent } from "../interface";
import { body, validationResult } from "express-validator";

const route = Router();

route.put('/',
    body("firstName").isLength({ min: 3, max: 15 }),
    body("age").isFloat({ min: 1, max: 120 }),
    body("_id").isMongoId(),
    async (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() })
        }
        let student: IStudent = {
            _id: req.body.id,
            age: req.body.age,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }
        let result = await updateStudent(student);
        res.send(result);
    });

export { route as putStudentsRoute };