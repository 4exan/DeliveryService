import { useEffect, useState } from "react";
import PackageService from "../../service/PackageService";

export default function Packages({ currentPage }) {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetchUserPackages();
  }, []);

  useEffect(() => {
    packages.filter((upackage) => upackage.status === `${currentPage}`);
  }, []);

  const fetchUserPackages = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await PackageService.getUserPackage(token);
      console.log(response);
      setPackages(response.packageList);
    } catch (error) {
      console.error("Error fetching packages:", error);
      setPackages(error.status);
    }
  };

  if (packages.length === 0) {
    return (
      <div className="dash-packages">
        <h2 className="page-title">{currentPage}</h2>
        <div className="table-container center">
          <h2 className="center">Currently no packages!</h2>
          <button className="action-btn center">Create new package!</button>
        </div>
      </div>
    );
  }

  return (
    <div className="dash-packages">
      <h2 className="page-title">{currentPage}</h2>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>ID:</th>
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
          </thead>
          <tbody>
            {packages
              .filter((upackage) => upackage.status === `${currentPage}`)
              .map((upackage) => (
                <tr>
                  <td>{upackage.id}</td>
                  <td>{upackage.senderDepartment.number}</td>
                  <td>{upackage.packageType}</td>
                  <td>{upackage.packageDescription}</td>
                  <td>{upackage.packagePrice}</td>
                  <td>{upackage.packageParams}</td>
                  <td>{upackage.recipientName}</td>
                  <td>{upackage.recipientPhone}</td>
                  <td>{upackage.recipientDepartment.number}</td>
                  <td>{upackage.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
