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
          <Modal.Title id="contained-modal-title-vcenter">
            Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Confirm status change</h4>
          <p>
            You about to change package status, are you sure you want to do
            this?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="action-btn red" onClick={props.onHide}>
            Cancel
          </button>
          <button
            className="action-btn green ml10"
            onClick={() => handleConfirm()}
          >
            Change
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
