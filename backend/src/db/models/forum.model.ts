import {
  Model,
  DataTypes,
  Sequelize,
  ModelAttributes,
  ModelCtor,
} from "sequelize";
import { ForumType } from "../../app/types/forum.type";
import userModel from "./user.model";
import clientModel from "./client.model";

const FORUM_TABLE = "FORUM";

const ForumSchema: ModelAttributes<Forum, ForumType> = {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    field: "id_forum",
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING(200),
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT("tiny"),
  },
  category: {
    allowNull: false,
    type: DataTypes.STRING(200),
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
};

class Forum extends Model {
  static associate(models: { [key: string]: ModelCtor<Model> }) {
    this.belongsTo(models.CLIENT, { as: "client" });

    this.belongsTo(models.USER, { as: "user" });

    this.hasMany(models.FORUM_COMMENT, {
      as: "forumComment",
      foreignKey: "forumId",
    });
  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: FORUM_TABLE,
      modelName: FORUM_TABLE,
      timestamps: false,
    };
  }
}

export default { FORUM_TABLE, ForumSchema, Forum };