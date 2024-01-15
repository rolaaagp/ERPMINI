import { readJSON } from "../../utils/readJson.js";

const users = readJSON("../providers/mockData.json");

export class UsersModel {
  static async getAll() {
    return users;
  }
}
