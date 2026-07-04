import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

const Home = () => {
  //   const [overview, setOverview] = useState([]);

  useEffect(() => {
    getOverview();
  }, []);

  const getOverview = async () => {
    try {
      const token = Cookies.get("token");
      const res = await axios.get(
        "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("Overview data:", res.data);
      // setOverview(res.data);
    } catch (e) {
      console.error("Error fetching overview:", e);
    }
  };

  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    navigate("/login");
  };
  return (
    <div>
      <button onClick={logout}>Logout</button>
      <h1>Referral Dashboard</h1>
      <p>Overview</p>
      {/* <ul>{}</ul> */}
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
