import { useNavigate } from "react-router-dom";
import "./index.css";

const Referrals = ({ referrals }) => {
  const navigate = useNavigate();

  return (
    <div className="referrals-table-container">
      <table className="referrals-table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>SERVICE</th>
            <th>DATE</th>
            <th>PROFIT</th>
          </tr>
        </thead>

        <tbody>
          {referrals.map((referral) => (
            <tr
              key={referral.id}
              onClick={() => navigate(`/referral/${referral.id}`)}
            >
              <td>{referral.name}</td>

              <td>{referral.serviceName}</td>

              <td>{referral.date}</td>

              <td className="profit">
                ₹{Number(referral.profit).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile View */}

      <div className="mobile-referrals">
        {referrals.map((referral) => (
          <div
            key={referral.id}
            className="mobile-card"
            onClick={() => navigate(`/referral/${referral.id}`)}
          >
            <div className="mobile-row">
              <span>Name</span>

              <strong>{referral.name}</strong>
            </div>

            <div className="mobile-row">
              <span>Service</span>

              <strong>{referral.serviceName}</strong>
            </div>

            <div className="mobile-row">
              <span>Date</span>

              <strong>{referral.date}</strong>
            </div>

            <div className="mobile-row">
              <span>Profit</span>

              <strong className="profit">
                ₹{Number(referral.profit).toLocaleString()}
              </strong>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Referrals;
