import { useEffect } from "react";

export default function Packages({ currentPage }) {
  useEffect(() => {
    fetchUserPackages();
  }, []);

  function fetchUserPackages() {}

  return (
    <div className="dash-packages">
      <h2 className="page-title">{currentPage}</h2>
      <div className="table-container">
        <table>
          <tr>
            <th>Id:</th>
            <th>Sender department:</th>
            <th>Type:</th>
            <th>Description:</th>
            <th>Price:</th>
            <th>Parameters:</th>
            <th>Recipient name:</th>
            <th>Recipient phone:</th>
            <th>Recipient department:</th>
            <th>Status:</th>
          </tr>
        </table>
      </div>
    </div>
  );
}
