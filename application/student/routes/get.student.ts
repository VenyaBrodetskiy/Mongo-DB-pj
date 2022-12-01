import { Router, Request, Response } from "express";
import { getStudents } from "../service";

const route = Router();

route.get('/', async (req: Request, res: Response) => {
    let result = await getStudents();
    res.send(result);
});

export { route as getStudentsRoute };