import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import { WidgetContext } from '../../context/WidgetContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Button from '../button/Button';
import styled from 'styled-components';

const DeleteModal = ({ data }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const { dispatch } = useContext(WidgetContext);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div title="modal-test">
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
            action={() => dispatch({ type: 'REMOVE_WIDGET', id: data.id })}
            content="Yes"
          />

          <Button action={closeModal} content="No" />
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
  width: 250px;
  background-color: white;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
