import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import routing components
import "./App.css";
import { Footer } from "./components/ui/Footer";
import { Sidebar } from "./components/ui/Sidebar";
import { ProfileCardApp } from "./components/ProfileCard";
import { NavApp } from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <main className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/ProfileCard" element={<ProfileCardApp />} />
              <Route path="/Nav" element={<NavApp />} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
