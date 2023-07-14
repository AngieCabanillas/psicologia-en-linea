import express from "express";
import validatorHandler from "../middlewares/validator.handler";
import forumSchema from "../app/schemas/forum.schema";
import ForumService from "../app/services/forum.service";

const { getForumSchema, createForumSchema, updateForumSchema } = forumSchema;
const router = express.Router();
const service = new ForumService();

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
  validatorHandler(getForumSchema, "params"),
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
  validatorHandler(createForumSchema, "body"),
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
  validatorHandler(getForumSchema, "params"),
  validatorHandler(updateForumSchema, "body"),
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
  "/client/:id",
  validatorHandler(getForumSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const forums = await service.findByClient(id);
      res.json(forums);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/user/:id",
  validatorHandler(getForumSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const forums = await service.findByUser(id);
      res.json(forums);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(getForumSchema, "params"),
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