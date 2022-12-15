import { Router, Request, Response } from "express";
import { deleteStudent, deleteStudentAsync } from "../service";

const route = Router();

route.delete('/', async (req: Request, res: Response) => {
    if (req.query && req.query.firstName && req.query.lastName && req.query.age) {
        console.log("delete many example", req.query);
        const firstName = req.query.firstName as string;
        const lastName = req.query.lastName as string;
        const age = parseInt(req.query.age as string);
        const result = await deleteStudentAsync(firstName, lastName, age);
        res.send(result);
    }
})

route.delete('/:id', async (req: Request, res: Response) => {
    let result = await deleteStudent(req.params.id);
    res.send(result);
});



export { route as deleteStudentsRoute };