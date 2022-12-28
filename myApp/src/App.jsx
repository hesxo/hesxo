import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import AppRoutes from "./Routes/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <AppRoutes />
    </div>
  );
}

export default App;
