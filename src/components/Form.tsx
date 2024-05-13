import { useOptimistic, useState } from "react";
import { update } from "../apis";
import { UpdateUser } from "./UserForm";
import CustomButton from "./CustomButton";

// useOptimistic hook을 활용한 낙관적 업데이트 구현
const Form = () => {
  const [formData, setFormData] = useState<UpdateUser>({
    email: "",
    password: "",
    nickname: "",
  });
  const [optimisticName, setOptimisticName] = useOptimistic(formData);

  const submitAction = async (formData) => {
    const newName = {
      email: formData.get("email"),
      password: formData.get("password"),
      nickname: formData.get("nickname"),
    };
    setOptimisticName(newName);
    const updatedName = (await update(newName)) as Promise<UpdateUser>;
    setFormData(updatedName);
  };
  return (
    <form action={submitAction}>
      <p>Your name is: {optimisticName.email}</p>
      <label htmlFor="">Email</label>
      <input
        type="text"
        disabled={formData.email !== optimisticName.email}
        name="email"
      />
      <label htmlFor="">Nickname</label>
      <input type="text" name="nickname" />
      <label htmlFor="">Password</label>
      <input type="text" name="password" />
      <CustomButton>Update</CustomButton>
    </form>
  );
};

export default Form;
