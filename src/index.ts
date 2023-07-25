import express from "express";
import { exerciseRouter } from "./Exercise/infrastructure/ExerciseRouter";
import * as bodyParser from "body-parser";
const app = express();

// Configs
import { config } from "./Exercise/config/config";
const { port } = config.server;

// Midlewares
app.use(bodyParser.json());
app.use("/api/v1/", exerciseRouter);

// Server
app.listen(port, () => {
  console.log(`[APP] - Starting application on port ${port}`);
});
