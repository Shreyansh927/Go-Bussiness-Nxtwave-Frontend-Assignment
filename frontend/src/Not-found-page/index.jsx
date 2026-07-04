import { useNavigate } from "react-router-dom";
import "./index.css";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <h1 className="not-found-title">404</h1>

        <p className="not-found-text">Page not found</p>

        <button className="back-btn" onClick={() => navigate("/")}>
          Back to dashboard
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
