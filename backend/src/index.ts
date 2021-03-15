import express from "express";
import cors from "cors";
import helmet from "helmet";
import mainRouter from "./routes";
import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

export const prisma = new PrismaClient();

const app: express.Application = express();

app.use(helmet());
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(mainRouter);

const port: string = process.env.SERVER_PORT || "5000";

app.listen(port, (): void => {
  console.log(`Server listening on port ${port}`);
});
