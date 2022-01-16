import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
}

export default App;
