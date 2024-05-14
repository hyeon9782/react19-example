import { PropsWithChildren, createContext, useState } from "react";

type User = {
  email: string;
  name: string;
  age: number;
};

type UserContextProps = {
  userData: User;
  setUserData: any;
};

export const UserContext = createContext<UserContextProps>({
  userData: {
    email: "",
    name: "",
    age: 0,
  },
  setUserData: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [userData, setUserData] = useState<User>({
    email: "기본 이메일",
    name: "기본 이름",
    age: 28,
  });
  return (
    <UserContext value={{ userData, setUserData }}>{children}</UserContext>
  );
};

export default UserProvider;
