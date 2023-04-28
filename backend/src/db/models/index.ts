import { Sequelize } from "sequelize";
import userModel from "./user.model";

const { User, UserSchema } = userModel;

export const setupModels = (sequelize: Sequelize) => {
  User.init(UserSchema, User.config(sequelize));

  User.associate(sequelize.models);
};
