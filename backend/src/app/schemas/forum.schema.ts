import Joi from "joi";
import { ForumType } from "../types/forum.type";

const id = Joi.number();
const name = Joi.string().min(3).max(200);
const description = Joi.string();
const category = Joi.string().min(3).max(200);
const date = Joi.date();
const clientId = Joi.number();
const userId = Joi.number();

const createForumSchema = Joi.object<Omit<ForumType, "id">, true>({
  name: name.required(),
  description: description.required(),
  category: category.required(),
  date: date.optional(),
  clientId: clientId.required(),
  userId: userId.required(),
});

const updateForumSchema = Joi.object<
  Omit<ForumType, "id" | "userId" | "clientId">,
  true
>({
  name: name.required(),
  description: description.required(),
  category: category.required(),
  date: date.optional(),
});

const getForumSchema = Joi.object({
  id: Joi.number(),
  userId: Joi.number(),
  clientId: Joi.number(),
})
  .or("id", "userId", "clientId")
  .required();

export default {
  createForumSchema,
  updateForumSchema,
  getForumSchema,
};