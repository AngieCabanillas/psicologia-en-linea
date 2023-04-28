import express, { Express } from "express";

import userRouter from "./user.routes";

const routerApi = (app: Express) => {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/user", userRouter);
};

export default routerApi;
