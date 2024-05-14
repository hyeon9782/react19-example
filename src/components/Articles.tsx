"use server";
import { getArticles } from "../apis";

const Articles = async () => {
  const articles = await getArticles();
  console.log(articles);
  return <div></div>;
};

export default Articles;
