import { post } from ".";

class UserService {
  login = (email: string, password: string) => {
    return post("api/v1/user/login", {
      email: email,
      password: password,
    });
  };

  logout = () => {
    return post("api/v1/user/logout", {});
  };
}

export const userService = new UserService();
