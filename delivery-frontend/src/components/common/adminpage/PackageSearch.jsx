import { useState } from "react";
import PackageService from "../../service/PackageService";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ConfirmModal from "../ConfirmModal";

export default function PackageInfo() {
  const [packageId, setPackageId] = useState();
  const [upackage, setUPackage] = useState({ id: 0 });
  const [packageStatus, setPackageStatus] = useState("CREATED");
  const [modalShow, setModalShow] = useState(false);
  const navigate = useNavigate();

  const handleBack = async (e) => {
    e.preventDefault();
    navigate(`/admin/package/`);
    setUPackage({ id: 0 });
  };

  const handleEdit = async () => {
    navigate(`/admin/package/edit/${upackage.id}`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      const response = await PackageService.getPackageById(packageId, token);
      if (response.upackage.id !== 0) {
        setUPackage(response.upackage);
        navigate(`/admin/package/${packageId}`);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  if (upackage.id !== 0) {
    return (
      <>
        <div
          className={`modal-background ${modalShow === true ? "" : "hidden"}`}
        ></div>
        <ConfirmModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          userPackage={upackage}
        />
        <div className="package-info-container">
          <form onSubmit={handleBack}>
            <input
              type="submit"
              className="bg-delivery-red text-white rounded-md w-auto px-2 center cursor-pointer"
              value={`Back`}
            />
          </form>
          <h2 className="p-5 font-semibold text-2xl">
            Package ID: {upackage.id}
            <span> Status: {upackage.status}</span>
          </h2>
          <div className="package-info-grid">
            <div className="package-info-child">
              <h3 className="font-semibold text-xl">Sender info:</h3>
              <p>Sender name: {upackage.senderName}</p>
              <p>Sender phone: {upackage.senderPhone}</p>
              <p>Sender department: {upackage.senderDepartment.number}</p>
            </div>
            <div className="package-info-child">
              <h3 className="font-semibold text-xl">Package info:</h3>
              <p>Package type: {upackage.packageType}</p>
              <p>Package description: {upackage.packageDescription}</p>
              <p>Package price: {upackage.packagePrice}</p>
              <p>Package params: {upackage.packageParams}</p>
            </div>
            <div className="package-info-child">
              <h3 className="font-semibold text-xl">Recipient info:</h3>
              <p>Recipient name: {upackage.recipientName}</p>
              <p>Recipient phone: {upackage.recipientPhone}</p>
              <p>Recipient department: {upackage.recipientDepartment.number}</p>
            </div>
          </div>
          <div className="button-panel">
            <button
              className="bg-delivery-red ml-5 text-white rounded-md w-auto px-2 center cursor-pointer"
              onClick={() => handleEdit()}
            >
              Edit
            </button>
            <button
              className="bg-green-600 text-white rounded-md w-auto px-2 ml-5 cursor-pointer"
              onClick={() => setModalShow(true)}
            >
              Set next status
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="form-container px-5">
      <form onSubmit={handleSubmit}>
        <input
          className="form-item input-number"
          type="number"
          placeholder="Enter package ID"
          value={packageId}
          onChange={(e) => setPackageId(e.target.value)}
        />
        <button
          type="submit"
          className="bg-delivery-red text-white rounded-md w-auto px-2 center"
        >
          Find!
        </button>
      </form>
    </div>
  );
}
