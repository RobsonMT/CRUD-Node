import express from "express";
import { userRoutes } from "./routers";

const app = express();

app.use(express.json());

app.use("/api", userRoutes);

export default app;
