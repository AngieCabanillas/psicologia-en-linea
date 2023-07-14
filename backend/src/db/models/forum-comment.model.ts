import {
  Model,
  DataTypes,
  Sequelize,
  ModelAttributes,
  ModelCtor,
} from "sequelize";
import { ForumCommentType } from "../../app/types/forum-comment.type";
import userModel from "./user.model";
import clientModel from "./client.model";
import forumModel from "./forum.model";

const FORUM_COMMENT_TABLE = "FORUM_COMMENT";

const ForumCommentSchema: ModelAttributes<ForumComment, ForumCommentType> = {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    field: "id_forum_comment",
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT("tiny"),
  },
  date: {
    allowNull: false,
    defaultValue: DataTypes.NOW,
    type: DataTypes.DATE,
  },
  clientId: {
    allowNull: true,
    field: "client_id_client",
    type: DataTypes.INTEGER,
    references: {
      model: clientModel.CLIENT_TABLE,
      key: "id_client",
    },
    onUpdate: "CASCADE",
    onDelete: "NO ACTION",
  },
  userId: {
    allowNull: true,
    field: "user_id_user",
    type: DataTypes.INTEGER,
    references: {
      model: userModel.USER_TABLE,
      key: "id_user",
    },
    onUpdate: "CASCADE",
    onDelete: "NO ACTION",
  },
  forumId: {
    allowNull: false,
    field: "forum_id_forum",
    type: DataTypes.INTEGER,
    references: {
      model: forumModel.FORUM_TABLE,
      key: "id_forum",
    },
    onUpdate: "CASCADE",
    onDelete: "NO ACTION",
  },
};

class ForumComment extends Model {
  static associate(models: { [key: string]: ModelCtor<Model> }) {
    this.belongsTo(models.CLIENT, { as: "client" });

    this.belongsTo(models.USER, { as: "user" });

    this.belongsTo(models.FORUM, { as: "forum" });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: FORUM_COMMENT_TABLE,
      modelName: FORUM_COMMENT_TABLE,
      timestamps: false,
    };
  }
}

export default { FORUM_COMMENT_TABLE, ForumCommentSchema, ForumComment };