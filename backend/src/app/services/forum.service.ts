import sequelize from "../../libs/sequelize";
import boom from "@hapi/boom";
import { ForumType } from "../types/forum.type";

const { models } = sequelize;

class ForumService {
  constructor() {}

  async findAll() {
    const rta = await models.FORUM.findAll();
    return rta;
  }

  async findOne(id: string) {
    const forum = await models.FORUM.findByPk(id);

    if (!forum) {
      throw boom.notFound("Foro no encontrado");
    }
    return forum;
  }

  async create(data: ForumType) {
    const newForum = await models.FORUM.create(data);
    return newForum;
  }

  async update(id: string, changes: ForumType) {
    const forum = await this.findOne(id);
    const rta = await forum.update(changes);

    return rta;
  }

  async delete(id: string) {
    const forum = await this.findOne(id);
    await forum.destroy();

    return { id };
  }

  async findByClient(clientId: string) {
    const forums = await models.FORUM.findAll({
      where: {
        clientId: clientId,
      },
    });

    if (forums.length === 0) {
      throw boom.notFound(
        "No se encontraron foros para el ID de cliente proporcionado"
      );
    }

    return forums;
  }
  async findByUser(userId: string) {
    const forums = await models.FORUM.findAll({
      where: {
        userId: userId,
      },
    });

    if (forums.length === 0) {
      throw boom.notFound(
        "No se encontraron foros para el ID de usario proporcionado"
      );
    }

    return forums;
  }
}

export default ForumService;