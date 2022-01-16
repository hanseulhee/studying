import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>게시글 {id}</h1>
    </div>
  );
};

export default Article;
