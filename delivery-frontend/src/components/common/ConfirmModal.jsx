import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PackageService from "../service/PackageService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmModal(props) {
  const [packageData, setPackageData] = useState({});
  const navigate = useNavigate();

  const handleConfirm = () => {
    PackageService.changePackageStatus(
      props.userPackage.id,
      props.userPackage,
      localStorage.getItem("token")
    );
    console.log(props.userPackage);
    navigate(`/user/profile`);
  };

  return (
    <div>
      <Modal
        className="modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="font-semibold text-2xl p-5 center"
          >
            Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="font-semibold">Confirm status change</h4>
          <p className="p-5">
            You about to change package status, are you sure you want to do
            this?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="bg-delivery-red text-white rounded-md w-auto px-2 ml-5 cursor-pointer"
            onClick={props.onHide}
          >
            Cancel
          </button>
          <button
            className="bg-green-600 text-white rounded-md w-auto px-2 ml-96 cursor-pointer"
            onClick={() => handleConfirm()}
          >
            Change
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
