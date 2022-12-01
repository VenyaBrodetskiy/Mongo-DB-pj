import express, { Application } from "express";
import { studentRouter } from "./application/student/routes";

const app: Application = express();

app.use(express.json());

app.use("/api/students", studentRouter);

export { app };