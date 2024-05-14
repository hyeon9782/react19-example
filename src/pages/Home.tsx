import { Suspense } from "react";
import Comments from "../components/Comments";
import Form from "../components/Form";
import LoginForm from "../components/LoginForm";
import UserForm from "../components/UserForm";
import Articles from "../components/Articles";
import { getGlobal } from "../server";
import Article from "../components/Article";

const article = {
  title: "제목 1",
  content: "내용 1",
  keywords: "hello",
};

const Home = () => {
  getGlobal();
  return (
    <div>
      <LoginForm />
      <UserForm />
      <Form />
      <Suspense fallback={<div>Loading...</div>}>
        <Comments />
      </Suspense>
      <Article article={article} />
      {/* <Articles /> */}
    </div>
  );
};

export default Home;
