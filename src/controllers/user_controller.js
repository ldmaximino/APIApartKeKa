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

  async getlog(req, res, next) {
    try {
      const { userName, pass } = req.query;
      const user = await userService.login({ userName, password: pass });
      if (!user)
        return res
          .status(404)
          .json({ code: "404", msg: "Credentials are not valid" });
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
}
