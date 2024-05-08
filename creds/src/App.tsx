import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CertificateGenerator from "./assets/pages/CertificateGenerator";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path="/" element={<CertificateGenerator />}></Route> */}
          <Route path="/" element={<CertificateGenerator />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
