import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function ConfirmModal(props) {
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
          <button className="action-btn green ml10" onClick={}>Change</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
