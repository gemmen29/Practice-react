import React, { forwardRef, useImperativeHandle } from "react";
import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="fs-4">{props.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const MyModal = forwardRef((props, ref) => {
  const [modalShow, setModalShow] = React.useState(false);

  useImperativeHandle(ref, () => ({
    showModal() {
      setModalShow(true);
    },
  }));

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        message={props.message}
      />
    </>
  );
});

export default MyModal;
