import Joi from "joi";
import { ForumCommentType } from "../types/forum-comment.type";

const id = Joi.number();
const description = Joi.string();
const date = Joi.date();
const clientId = Joi.number();
const userId = Joi.number();
const forumId = Joi.number();

const createForumCommentSchema = Joi.object<Omit<ForumCommentType, "id">, true>(
  {
    description: description.required(),
    date: date.optional(),
    clientId: clientId.required(),
    userId: userId.required(),
    forumId: forumId.required(),
  }
);

const updateForumCommentSchema = Joi.object<
  Omit<ForumCommentType, "id" | "userId" | "clientId" | "forumId">,
  true
>({
  description: description.required(),
  date: date.optional(),
});

const getForumCommentSchema = Joi.object({
  id: Joi.number(),
  userId: Joi.number(),
  clientId: Joi.number(),
})
  .or("id", "userId", "clientId", "forumId")
  .required();

export default {
  createForumCommentSchema,
  updateForumCommentSchema,
  getForumCommentSchema,
};