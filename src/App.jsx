import { useState } from "react";
import DashboardPage from "./pages/DashboardPage.jsx";
import WIP from "./pages/WIP.jsx";

function App() {
  const [wip, setWip] = useState(true);

  return wip ? <WIP /> : <DashboardPage />;
}

export default App;
