import express from "express";
import { studentRouter } from "./application/student/routes";

const app = express();

app.use(express.json());

app.use("/api/students", studentRouter);

