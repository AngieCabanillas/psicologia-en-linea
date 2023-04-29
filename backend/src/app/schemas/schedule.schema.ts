import Joi from "joi";
import { ScheduleType } from "../types/schedule.type";

const id = Joi.number();
const days = Joi.string().min(2).max(100);
const detail = Joi.string();
const userId = Joi.number();

const createScheduleSchema = Joi.object<Omit<ScheduleType, "id">, true>({
  days: days.required(),
  detail: detail.optional().empty("").allow(""),
  userId: userId.required(),
});

const updateScheduleSchema = Joi.object<
  Omit<ScheduleType, "id" | "userId">,
  true
>({
  days: days.required(),
  detail: detail.optional().empty("").allow(""),
});

const getScheduleSchema = Joi.object<{ id: number }, true>({
  id: id.required(),
});

export default {
  createScheduleSchema,
  updateScheduleSchema,
  getScheduleSchema,
};
