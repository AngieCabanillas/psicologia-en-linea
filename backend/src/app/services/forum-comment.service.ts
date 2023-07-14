import sequelize from "../../libs/sequelize";
import boom from "@hapi/boom";
import { ForumCommentType } from "../types/forum-comment.type";

const { models } = sequelize;

class ForumCommentService {
  constructor() {}

  async findAll() {
    const rta = await models.FORUM_COMMENT.findAll();
    return rta;
  }

  async findOne(id: string) {
    const forumComment = await models.FORUM_COMMENT.findByPk(id);

    if (!forumComment) {
      throw boom.notFound("Comentario no encontrado");
    }
    return forumComment;
  }

  async create(data: ForumCommentType) {
    const newForum = await models.FORUM_COMMENT.create(data);
    return newForum;
  }

  async update(id: string, changes: ForumCommentType) {
    const forum = await this.findOne(id);
    const rta = await forum.update(changes);

    return rta;
  }

  async delete(id: string) {
    const forum = await this.findOne(id);
    await forum.destroy();

    return { id };
  }

  async findByForum(forumId: string) {
    const forums = await models.FORUM_COMMENT.findAll({
      where: {
        forumId: forumId,
      },
    });

    if (forums.length === 0) {
      throw boom.notFound(
        "No se encontraron comentarios para el ID del foro proporcionado"
      );
    }

    return forums;
  }
}

export default ForumCommentService;