import { Suspense } from "react";
import Comments from "../components/Comments";
import Form from "../components/Form";
import LoginForm from "../components/LoginForm";
import UserForm from "../components/UserForm";

const Home = () => {
  return (
    <div>
      <LoginForm />
      <UserForm />
      <Form />
      <Suspense fallback={<div>Loading...</div>}>
        <Comments />
      </Suspense>
    </div>
  );
};

export default Home;
