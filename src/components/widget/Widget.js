import React from 'react';
import styled from 'styled-components';
import DeleteModal from '../../components/modal/Modal';
import { source } from '../../data';

const shortString = (data) => {
  const MAX_LENGTH = 24;
  return data.name.substring(0, MAX_LENGTH) + '...';
};

const Widget = ({ data }) => {
  return (
    <Card>
      <Image src={source[data.language]} alt="" />
      <CardInfo>
        <CardTitle>
          {data.name.length > 24 ? (
            <Name>{shortString(data)}</Name>
          ) : (
            <Name>{data.name}</Name>
          )}
          <Language>{data.language}</Language>
        </CardTitle>
        <Delete>
          <DeleteModal data={data} />
        </Delete>
      </CardInfo>
    </Card>
  );
};

const Card = styled.div`
  background-color: white;
  display: flex;
  border-radius: 15px;
  margin: 30px;
  box-shadow: 6px 6px 20px rgba(122, 122, 122, 0.212);
  justify-content: flex-start;
  height: 125px;
  width: 280px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 8px 0 8px;
  width: 100%;
`;

const CardTitle = styled.div`
  font-family: 'Avenir Next', 'Lato', sans-serif;
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  overflow-wrap: break-word;
  width: 155px;
`;

const Delete = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  position: relative;
  font-weight: 400;
  color: rgb(119, 119, 119);
  font-size: 14px;
  margin: 0 0 10px 10px;
`;

const Image = styled.img`
  width: 90px;
  border-radius: 15px 0 0 15px;
  object-fit: cover;
`;

const Name = styled.h1`
  font-size: 22px;
  font-weight: 600;
  margin: 0;
`;

const Language = styled.p`
  font-size: 17px;
  margin: 0;
`;

export default Widget;
