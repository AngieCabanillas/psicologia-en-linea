import express, { Express } from "express";

import userRouter from "./user.routes";
import clientRouter from "./client.routes";
import scheduleRouter from "./schedule.routes";
import reserveRouter from "./reserve.routes";

const routerApi = (app: Express) => {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/user", userRouter);
  router.use("/client", clientRouter);
  router.use("/schedule", scheduleRouter);
  router.use("/reserve", reserveRouter);
};

export default routerApi;
