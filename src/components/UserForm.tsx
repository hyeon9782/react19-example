import { useActionState } from "react";
import { update } from "../apis";
import CustomButton from "./CustomButton";

export type UpdateUser = {
  email: string;
  password: string;
  nickname: string;
};

// useActionState hookd을 활용한 form 관리
const UserForm = () => {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      console.log(formData);

      const error = await update({
        email: formData.get("email"),
        password: formData.get("password"),
        nickname: formData.get("nickname"),
      });
      console.log(previousState);

      if (error) {
        return error;
      }

      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <label htmlFor="">Email</label>
      <input type="text" name="email" />
      <label htmlFor="">Nickname</label>
      <input type="text" name="nickname" />
      <label htmlFor="">Password</label>
      <input type="text" name="password" />
      {error && <span>Error Message</span>}
      <CustomButton>Update</CustomButton>
    </form>
  );
};

export default UserForm;
