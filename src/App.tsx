import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CatViewer from "./pages/CatViewer";
import WorkingHours from "./pages/WorkingHours";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav
          style={{
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <ul>
            <li>
              <Link to="/cat-viewer">CatViewer</Link>
            </li>
            <li>
              <Link to="/working-hour">WorkingHours</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/cat-viewer" element={<CatViewer />} />
          <Route path="/working-hour" element={<WorkingHours />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
