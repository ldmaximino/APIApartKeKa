import { UserModel } from "./model/user_model.js";

export default class UserDao {
  constructor() {}

  login = async (userName) => {
    try {
        return await UserModel.findOne({
          userName: { $regex: new RegExp(`^${userName}$`, 'i') } // Insensible a mayúsculas
        });
    } catch (error) {
      throw new Error(error);
    }
  };
}
