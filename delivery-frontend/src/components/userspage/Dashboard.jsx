import { useState } from "react";
import Packages from "../common/dashboardPanel/Packages";

export default function Dashboard() {
  const [page, setPage] = useState("incomming");

  function handleSetPage(e) {
    e.preventDefault();
  }

  return (
    <div class="dashboard">
      <div class="sidebar">
        <ul class="sidebar-list">
          <li class="invoice-btn">
            <a href="/package/create">Create invoice</a>
          </li>
          <li class="sidebar-list-item">
            My package
            <ul>
              <li class="sidebar-list-item">
                <button
                  onClick={(e) => setPage(e.target.value)}
                  value={`incomming`}
                >
                  Incomming
                </button>
              </li>
              <li class="sidebar-list-item">
                <button
                  onClick={(e) => setPage(e.target.value)}
                  value={`outcomming`}
                >
                  Outcomming
                </button>
              </li>
              <li class="sidebar-list-item">
                <button
                  onClick={(e) => setPage(e.target.value)}
                  value={`archive`}
                >
                  Archive
                </button>
              </li>
            </ul>
          </li>
          <li class="sidebar-list-item">Register</li>
          <li class="sidebar-list-item">Money transfer</li>
          <li class="sidebar-list-item">Fulfillment</li>
          <li class="sidebar-list-item">Services</li>
          <li class="sidebar-list-item">Contacts</li>
          <li class="sidebar-list-item">Reporting</li>
          <li class="sidebar-list-item">Help</li>
          <li class="sidebar-list-item">Settings</li>
        </ul>
      </div>
      <div class="main-panel">
        <Packages currentPage={page} />
      </div>
    </div>
  );
}
