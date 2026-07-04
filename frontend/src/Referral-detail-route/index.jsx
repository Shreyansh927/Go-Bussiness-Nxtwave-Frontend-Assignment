import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Headers from "../header";
import "./index.css";
import axios from "axios";
import Cookies from "js-cookie";

const ReferralDetailRoute = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [referralDetail, setReferralDetail] = useState(null);
  const url = import.meta.env.VITE_REFERRAL_URL;

  const getReferralDetail = useCallback(async () => {
    try {
      const token = Cookies.get("token");
      const res = await axios.get(`${url}?id=${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Referral detail data:", res?.data?.data?.referrals?.[0]);
      setReferralDetail(res.data.data.referrals[0]);
    } catch (error) {
      console.error("Error fetching referral detail:", error);
    }
  }, [id]);

  useEffect(() => {
    getReferralDetail();
  }, [getReferralDetail]);
  return (
    <>
      <Headers />

      <div className="referral-details-container">
        <p className="back-btn" onClick={() => navigate("/")}>
          ← Back to dashboard
        </p>

        <h1 className="details-heading">Referral Details</h1>

        <p className="details-description">
          Full information for this referral partner.
        </p>

        <div className="details-card">
          <div className="details-card-header">
            <h2>{referralDetail?.name}</h2>

            <span className="service-chip">{referralDetail?.serviceName}</span>
          </div>

          <div className="detail-row">
            <p>REFERRAL ID</p>
            <p>{referralDetail?.id}</p>
          </div>

          <div className="detail-row">
            <p>NAME</p>
            <p>{referralDetail?.name}</p>
          </div>

          <div className="detail-row">
            <p>SERVICE NAME</p>
            <p>{referralDetail?.serviceName}</p>
          </div>

          <div className="detail-row">
            <p>DATE</p>
            <p>
              {new Date(referralDetail?.date).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              })}
            </p>
          </div>

          <div className="detail-row">
            <p>PROFIT</p>
            <p>${referralDetail?.profit?.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferralDetailRoute;
