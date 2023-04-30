import { QueryInterface } from "sequelize";
import userModel from "../models/user.model";
import clientModel from "../models/client.model";
import scheduleModel from "../models/schedule.model";
import reserveModel from "../models/reserve.model";

const { UserSchema, USER_TABLE } = userModel;
const { ClientSchema, CLIENT_TABLE } = clientModel;
const { ScheduleSchema, SCHEDULE_TABLE } = scheduleModel;
const { ReserveSchema, RESERVE_TABLE } = reserveModel;

export async function up(queryInterface: QueryInterface) {
  await queryInterface.createTable(USER_TABLE, UserSchema);
  await queryInterface.createTable(CLIENT_TABLE, ClientSchema);
  await queryInterface.createTable(SCHEDULE_TABLE, ScheduleSchema);
  await queryInterface.createTable(RESERVE_TABLE, ReserveSchema);
}

export async function down(queryInterface: QueryInterface) {
  await queryInterface.dropTable(USER_TABLE);
  await queryInterface.dropTable(CLIENT_TABLE);
  await queryInterface.dropTable(SCHEDULE_TABLE);
  await queryInterface.dropTable(RESERVE_TABLE);
}
