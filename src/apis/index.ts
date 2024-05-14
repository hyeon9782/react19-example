import { UpdateUser } from "../components/UserForm";

export type LoginUser = {
  email: string;
  password: string;
};

const login = (loginUser: LoginUser) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(loginUser);

      resolve("Success");
    }, 2000);
  });
};

const update = (updateUser: UpdateUser) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(updateUser);

      resolve(updateUser);
    }, 2000);
  });
};

const getComments = (): Promise<string[]> => {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle(["안녕하세요.", "반가워요.", "잘있어요.", "다시만나요"]);
    }, 2000);
  });
};

const getArticles = (): Promise<string[]> => {
  return new Promise((resovle) => {
    setTimeout(() => {
      resovle([
        "안녕하세요. 게시글이에요",
        "반가워요. 게시글이요",
        "잘있어요. 게시글이이요",
        "다시만나요. 게시글이에요",
      ]);
    }, 2000);
  });
};

export { login, update, getComments, getArticles };
