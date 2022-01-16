import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <h1>홈페이지 입니다.</h1>
        <Link to="/detail">자세히 ..</Link>
      </div>
    );
  };
  
  export default Home;