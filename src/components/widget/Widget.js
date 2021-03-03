import React, { useContext } from 'react';
import { WidgetContext } from '../../context/WidgetContext';
import styled from 'styled-components';
import DeleteModal from '../../components/modal/Modal';

const Widget = ({ data }) => {
  return (
    <Card>
      <Image src="https://picsum.photos/480/480" alt="" />
      <CardInfo>
        <CardTitle>
          <Name>{data.language}</Name>
          <Language>{data.name}</Language>
        </CardTitle>
      </CardInfo>

      <DeleteModal data={data} />
    </Card>
  );
};

//STYLING
const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 200px;
  margin-right: 1rem;
  padding: 1rem;
  z-index: 0;
  cursor: pointer;
  &:before {
    content: ' ';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 88%;
    height: 88%;
    background: #d1d1d1;
    border-radius: 15px;
    z-index: -1;
    transition: all 150ms ease;
  }
  &:hover:before {
    width: 100%;
    height: 100%;
    transition: all 300ms ease;
  }
`;

const CardInfo = styled.div`
  margin: 0 8px 0 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
`;

const CardTitle = styled.div`
  font-family: 'Avenir Next', 'Lato', sans-serif;
  flex: 1;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
`;

const Image = styled.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const Language = styled.p`
  font-size: 0.875rem;
  margin: 0;
`;

export default Widget;
