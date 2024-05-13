import { PropsWithChildren, Ref } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  ref?: Ref<HTMLButtonElement>;
};

// useFormStatus hook으로 컴포넌트의 상위 form의 상태 가져오기
const CustomButton = ({
  children,
  ref,
  ...props
}: PropsWithChildren<Props>) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" ref={ref} {...props} disabled={pending}>
      {children}
    </button>
  );
};

export default CustomButton;
