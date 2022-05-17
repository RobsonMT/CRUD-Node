import express from "express";
import userRoutes from "./routers/users.routes";

const app = express();

app.use(express.json());

app.use("", userRoutes);

export default app;
