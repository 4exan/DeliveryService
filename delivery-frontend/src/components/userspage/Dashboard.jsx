import { useState } from "react";
import Packages from "../common/dashboardPanel/Packages";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const [page, setPage] = useState("active");

  function handleSetPage(e) {
    e.preventDefault();
  }

  function handleClickInvoice() {
    navigate("/package/create");
  }

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul className="sidebar-list">
          <li className="invoice-btn">
            <button className="action-btn" onClick={handleClickInvoice}>
              Create invoice
            </button>
          </li>
          <li className="sidebar-list-item">
            My package
            <ul>
              <li className="sidebar-list-item">
                <button
                  onClick={(e) => setPage(e.target.value)}
                  value={`active`}
                >
                  Active
                </button>
              </li>
              <li className="sidebar-list-item">
                <button
                  onClick={(e) => setPage(e.target.value)}
                  value={`received`}
                >
                  Received
                </button>
              </li>
            </ul>
          </li>
          <li className="sidebar-list-item">Register</li>
          <li className="sidebar-list-item">Money transfer</li>
          <li className="sidebar-list-item">Fulfillment</li>
          <li className="sidebar-list-item">Services</li>
          <li className="sidebar-list-item">Contacts</li>
          <li className="sidebar-list-item">Reporting</li>
          <li className="sidebar-list-item">Help</li>
          <li className="sidebar-list-item">Settings</li>
        </ul>
      </div>
      <div className="main-panel">
        <Packages currentPage={page} />
      </div>
    </div>
  );
}
