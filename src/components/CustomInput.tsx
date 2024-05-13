import { Ref } from "react";
type Props = {
  ref?: Ref<HTMLInputElement>;
};
const CustomInput = ({ ref, ...props }: Props) => {
  return <input ref={ref} {...props} />;
};

export default CustomInput;
