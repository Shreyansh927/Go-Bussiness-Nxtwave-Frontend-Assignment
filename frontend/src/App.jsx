import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import NotFoundPage from "./Not-found-page";
import ReferralDetailRoute from "./Referral-detail-route";
import ProtectedRoute from "./protected-route";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route
          path="/referral/:id"
          element={<ProtectedRoute element={<ReferralDetailRoute />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
