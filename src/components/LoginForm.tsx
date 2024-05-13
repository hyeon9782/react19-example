import { ChangeEvent, useState, useTransition } from "react";
import { LoginUser, login } from "../apis";

// useTransition hook을 활용한 pending 처리
const LoginForm = () => {
  const [loginUser, setLoginUser] = useState<LoginUser>({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      const error = await login(loginUser);
      if (error) {
        setError(error);
        return;
      }
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser((prevLoginUser) => ({
      ...prevLoginUser,
      [name]: value,
    }));
  };
  return (
    <form action={handleSubmit}>
      <label htmlFor="">Email</label>
      <input
        type="text"
        value={loginUser.email}
        name="email"
        onChange={handleChange}
      />

      <label htmlFor="">Password</label>
      <input
        type="password"
        value={loginUser.password}
        name="password"
        onChange={handleChange}
      />
      {error && <span>올바른 형식의 비밀번호가 아닙니다.</span>}
      <button type="submit" disabled={isPending}>
        Login
      </button>
    </form>
  );
};

export default LoginForm;
