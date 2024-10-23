import UserDao from "../persistence/dao/user_dao.js";
const userDao = new UserDao();

export default class UserService {

  async login(user) {
    try {
      const { userName, password } = user;
      const findUser = await userDao.login(userName);
      if(!findUser) return null;
      if(password != findUser.password) return null
      return findUser
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllUsers() {
    try {
      return userDao.getAllUsers();
    } catch (error) {
      throw new Error(error);
    }
  }
}
