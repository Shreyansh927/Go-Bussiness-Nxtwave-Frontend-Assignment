import { useState, useEffect, useCallback } from "react";
import "./index.css";
import Cookies from "js-cookie";
import axios from "axios";
import Referrals from "../Referrals";
import Headers from "../header";

const Home = () => {
  const [overview, setOverview] = useState([]);
  const [summary, setSummary] = useState({});
  const [currentUserReferral, setCurrentUserReferral] = useState(null);
  const [currentSortingOrder, setCurrentSortingOrder] = useState("");
  const [referrals, setReferrals] = useState([]);
  const [totalReferrals, setTotalReferrals] = useState(0);
  const [searchService, setSearchService] = useState("");
  const [startPageIndex, setStartPageIndex] = useState(0);
  const [endPageIndex, setEndPageIndex] = useState(10);
  const [t, setT] = useState(0);
  const url = import.meta.env.REFERRAL_URL;
  // Debounse the search input to avoid excessive API calls
  useEffect(() => {
    const delayDebounceFunc = setTimeout(() => {
      getOverview();
      console.log("searchService:", searchService);
    }, 500);

    return () => clearTimeout(delayDebounceFunc);
  }, [searchService, currentSortingOrder, startPageIndex, endPageIndex]);

  const getOverview = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      const res = await axios.get(
        `${url}?search=${searchService}&sort=${currentSortingOrder}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("Overview data:", res?.data);
      setSummary(res?.data?.data?.serviceSummary);
      setCurrentUserReferral(res?.data?.data?.referral);
      setCurrentSortingOrder(res?.data?.data?.sort);

      const formattedMetricsOverview = res?.data?.data?.metrics?.map((m) => ({
        id: m.id,
        kind: m.kind,
        value: m.value,
        label: m.label,
      }));
      setOverview(formattedMetricsOverview);

      const formattedReferrals = res?.data?.data?.referrals
        ?.slice(startPageIndex, endPageIndex)
        .map((r) => ({
          id: r.id,
          name: r.name,
          profit: r.profit,
          serviceName: r.serviceName,
          date: new Date(r.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }),
        }));
      setReferrals(formattedReferrals);
      const totalReferralsCount = res?.data?.data?.referrals?.length || 0;
      setTotalReferrals(Math.ceil(formattedReferrals.length / 10));
      setT(Math.ceil(totalReferralsCount / 10));
      console.log("total referrals:", totalReferrals);
      // setOverview(res.data);
    } catch (e) {
      console.error("Error fetching overview:", e);
    }
  }, [searchService, currentSortingOrder, startPageIndex, endPageIndex]);

  const updatePageNo = (pageNo) => {
    const newStartIndex = (pageNo - 1) * 10;
    const newEndIndex = newStartIndex + 10;
    setStartPageIndex(newStartIndex);
    setEndPageIndex(newEndIndex);
  };

  return (
    <div className="home-page">
      <Headers />

      <main className="dashboard-container">
        {/* Dashboard Heading */}

        <section className="dashboard-header">
          <h1>Referral Dashboard</h1>
          <p>
            Track your referrals, earnings and partner activity in one place.
          </p>
        </section>

        {/* Overview */}

        <section className="dashboard-card">
          <h3>Overview</h3>

          <div className="overview-grid">
            {overview.map((metric) => (
              <div className="metric-card" key={metric.id}>
                <h2>{metric.value}</h2>

                <p>{metric.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Summary */}

        <section className="dashboard-card">
          <h3>Service Summary</h3>

          <div className="summary-grid">
            {Object.entries(summary).map(([key, value]) => (
              <div className="summary-card" key={key}>
                <span>{key}</span>

                <h4>{value}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Referral */}

        <section className="dashboard-card">
          <h3>Refer friends and earn more</h3>

          <div className="referral-grid">
            <div className="referral-input">
              <label>Your Referral Link</label>

              <input readOnly value={currentUserReferral?.link || ""} />
            </div>

            <div className="referral-input">
              <label>Your Referral Code</label>

              <input readOnly value={currentUserReferral?.code || ""} />
            </div>
          </div>
        </section>

        {/* Referrals */}

        <section className="dashboard-card">
          <div className="toolbar">
            <div className="search-box">
              <label>Search</label>

              <input
                placeholder="Name or service..."
                value={searchService}
                onChange={(e) => setSearchService(e.target.value)}
              />
            </div>

            <div className="sort-box">
              <label>Sort by date</label>

              <select
                value={currentSortingOrder}
                onChange={(e) => setCurrentSortingOrder(e.target.value)}
              >
                <option value="desc">Newest first</option>

                <option value="asc">Oldest first</option>
              </select>
            </div>
          </div>

          <Referrals referrals={referrals} />

          <div className="pagination">
            {Array.from({ length: t }, (_, index) => (
              <button key={index} onClick={() => updatePageNo(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
