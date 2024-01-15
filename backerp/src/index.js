import express from "express";
import cors from "cors";
import { corsOptions } from "./providers/cors.js";
import { userRouter } from "./routes/routes.user.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(cors(corsOptions));

app.use("/users", userRouter);

app.use((req, res) => res.status(404).send("<h1>404 Not Found.</h1>"));

app.listen(PORT, () => console.log("Server is running!!!"));
