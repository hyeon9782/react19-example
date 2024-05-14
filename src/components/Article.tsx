type Props = {
  article: {
    keywords: string;
    title: string;
    content: string;
  };
};
const Article = ({ article: { keywords, title, content } }: Props) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <meta name="keywords" content={keywords} />
    </article>
  );
};

export default Article;
