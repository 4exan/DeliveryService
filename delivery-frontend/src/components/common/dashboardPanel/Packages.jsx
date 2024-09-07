import { useEffect, useState } from "react";
import PackageService from "../../service/PackageService";
import { useNavigate } from "react-router-dom";

export default function Packages({ currentPage }) {
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserPackages();
  }, []);

  useEffect(() => {
    if (currentPage === "active")
      packages.filter((upackage) => upackage.status !== `archive`);
  }, []);

  function handleClickInvoice() {
    navigate("/package/create");
  }

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
      <div className="dash-packages mt-12">
        <h2 className="first-letter:uppercase text-2xl font-semibold">
          {currentPage}
        </h2>
        <div className="table-container center mt-12 mx-80">
          <h2 className="center">Currently no packages!</h2>
          <button
            className="bg-delivery-red text-white rounded-md w-auto px-2 center"
            onClick={handleClickInvoice}
          >
            Create new package!
          </button>
        </div>
      </div>
    );
  }

  function filter() {
    if (currentPage !== "received") {
      return packages.filter((upackage) => upackage.status !== `RECEIVED`);
    } else {
      return packages.filter((upackage) => upackage.status === `RECEIVED`);
    }
  }

  const filterPackages = async () => {};

  return (
    <div className="dash-packages mt-12">
      <h2 className="first-letter:uppercase text-2xl font-semibold">
        {currentPage}
      </h2>
      <div className="mt-12">
        <table className="table w-11/12">
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
            {filter().map((upackage) => (
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
