import express from "express";
import usersRoutes from "./routes/users.routes";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/users", usersRoutes);

app.listen(PORT, () => {
  console.log(`App running!\nhttp://localhost:${PORT}/`);
});
