import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Article from "./Article";
import Articles from "./Articles";
import Detail from "./Detail";
import Home from "./Home";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  );
}

export default App;
