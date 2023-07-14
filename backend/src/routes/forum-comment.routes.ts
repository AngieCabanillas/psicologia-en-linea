import express from "express";
import validatorHandler from "../middlewares/validator.handler";
import forumCommentSchema from "../app/schemas/forum-comment.schema";
import ForumCommentService from "../app/services/forum-comment.service";

const {
  getForumCommentSchema,
  createForumCommentSchema,
  updateForumCommentSchema,
} = forumCommentSchema;
const router = express.Router();
const service = new ForumCommentService();

router.get("/", async (req, res, next) => {
  try {
    const forums = await service.findAll();
    res.json(forums);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getForumCommentSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const forum = await service.findOne(id);
      res.json(forum);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createForumCommentSchema, "body"),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newForum = await service.create(body);
      res.status(201).json(newForum);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:id",
  validatorHandler(getForumCommentSchema, "params"),
  validatorHandler(updateForumCommentSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const forum = await service.update(id, body);
      res.json(forum);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/forum/:id",
  validatorHandler(getForumCommentSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const forums = await service.findByForum(id);
      res.json(forums);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getForumCommentSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

export default router;