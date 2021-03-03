import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { WidgetContext } from '../../context/WidgetContext';

const DeleteModal = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { dispatch } = useContext(WidgetContext);

  function openModal() {
    setIsOpen(true);
    console.log(data);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Delete</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <div>Sure you want to delete this widget?</div>
        <form>
          <button
            onClick={() => dispatch({ type: 'REMOVE_WIDGET', id: data.id })}
          >
            YES
          </button>
          <button onClick={closeModal}>NO</button>
        </form>
      </Modal>
    </div>
  );
};

export default DeleteModal;
