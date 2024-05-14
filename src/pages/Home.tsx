import { Suspense } from "react";
import Comments from "../components/Comments";
import Form from "../components/Form";
import LoginForm from "../components/LoginForm";
import UserForm from "../components/UserForm";
import Articles from "../components/Articles";
import { getGlobal } from "../server";
import Article from "../components/Article";
import BootstrapButton from "../components/BootstrapButton";
import UserProvider from "../context/UserContext";
import Header from "../components/Header";

const article = {
  title: "제목 1",
  content: "내용 1",
  keywords: "hello",
};

const Home = () => {
  getGlobal();
  return (
    <UserProvider>
      <div>
        <Header />
        <LoginForm />
        <UserForm />
        <Form />
        <Suspense fallback={<div>Loading...</div>}>
          <Comments />
        </Suspense>
        <Article article={article} />
        <BootstrapButton />
        {/* <Articles /> */}
      </div>
    </UserProvider>
  );
};

export default Home;
