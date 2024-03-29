import express, { Express } from "express";

import userRouter from "./user.routes";
import clientRouter from "./client.routes";
import scheduleRouter from "./schedule.routes";
import reserveRouter from "./reserve.routes";
import academicInformationRouter from "./academic-information.routes";
import forumRouter from "./forum.routes";
import forumCommentRouter from "./forum-comment.routes";

const routerApi = (app: Express) => {
  const router = express.Router();
  app.use("/api/v1", router);

  router.use("/user", userRouter);
  router.use("/client", clientRouter);
  router.use("/schedule", scheduleRouter);
  router.use("/reserve", reserveRouter);
  router.use("/academic-information", academicInformationRouter);
  router.use("/forum", forumRouter);
  router.use("/forum-comment", forumCommentRouter);
};

export default routerApi;