import UserService from "../services/user_service.js";
const userService = new UserService();

export default class UserController {
  constructor() {}

  async login(req, res, next) {
    try {
      const user = await userService.login(req.body);
      if (!user)
        return res
          .status(404)
          .json({ code: "404", msg: "Credentials are not valid" });
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      if(!users) return null;
      return res.json(users);
    } catch (error) {
      next(error);
    }
  }
}
