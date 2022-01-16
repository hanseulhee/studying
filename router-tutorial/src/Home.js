import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈페이지 입니다.</h1>
      <Link to="/detail">자세히 ..</Link>
      <br />
      <Link to="/articles">게시글 목록</Link>
    </div>
  );
};

export default Home;
