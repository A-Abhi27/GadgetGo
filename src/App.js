import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home";
import Filter from "./components/Filter";
import About from "./components/About";
import Details from "./components/Details";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/filter" Component={Filter} />
          <Route path="/about" Component={About} />
          <Route path="/:id" Component={Details} />
          <Route path="/*" Component={<h1>Error Page</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
