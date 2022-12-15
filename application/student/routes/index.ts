import { deleteStudentsRoute } from "./delete.students";
import { getStudentsRoute } from "./get.student";
import { postStudentsRoute } from "./post.students";
import { putStudentsRoute } from "./put.student";

export const studentRouter = [getStudentsRoute, postStudentsRoute, putStudentsRoute, deleteStudentsRoute];