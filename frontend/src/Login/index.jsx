import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const token = Cookies.get("token");
  useEffect(() => {
    if (token) {
      navigate("/"); // Redirect to home page if token exists
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin",
        {
          email,
          password,
        },
      );
      if (res.data.success) {
        Cookies.set("token", res.data.data.token, { expires: 1 }); // Set token in cookies with 1-day expiration
        navigate("/"); // Redirect to home page after successful login
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Invalid email or password");
    }
    // Add login logic here
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>{error}</p>
    </>
  );
};

export default Login;
