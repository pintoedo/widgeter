import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { WidgetContext } from '../../context/WidgetContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

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
      <FontAwesomeIcon onClick={openModal} icon={faTrash} />
      <ModalStyled
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        <p>Sure you want to delete this widget?</p>
        <ButtonDiv>
          <Button
            onClick={() => dispatch({ type: 'REMOVE_WIDGET', id: data.id })}
          >
            YES
          </Button>
          <Button onClick={closeModal}>NO</Button>
        </ButtonDiv>
      </ModalStyled>
    </div>
  );
};

export default DeleteModal;

const ModalStyled = styled(Modal)`
  margin: 20% auto;
  padding: 10px;
  height: 120px;
  width: 200px;
  background-color: white;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  border-radius: 2px;
  padding: 2px 10px;
  margin: 10px;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  color: white;
  background-color: #2196f3;
  outline: none;
`;
