import { UsersModel } from "../../models/user/model.user.js";

export class UsersController {
  static async getAll(req, res) {
    try {
      const users = await UsersModel.getAll();
      res.json(users);
    } catch (error) {
      console.error(error);
    }
  }
}
