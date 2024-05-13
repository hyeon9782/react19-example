import { use } from "react";
import { getComments } from "../apis";

// use를 이용한 promise 처리 => 아직 렌더링 중 생성된 Promise에는 사용하지 못한다
const Comments = () => {
  const comments = use(getComments());
  console.log(comments);

  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>{comment}</div>
      ))}
    </div>
  );
};

export default Comments;
