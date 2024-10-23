import Home from "./pages/Home/Home.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import LogIn from "./pages/Login/LogIn.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import WIP from "./pages/WIP/wip.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const routes = (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/login" exact element={<LogIn />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );

  return import.meta.env.VITE_WIP === "true" ? <WIP /> : <div>{routes}</div>;
}

export default App;
