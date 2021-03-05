import React, { useContext } from 'react';
import { WidgetContext } from '../../context/WidgetContext';
import Widget from '../../components/widget/Widget';
import styled, { keyframes } from 'styled-components';

const Dashboard = () => {
  const appContext = useContext(WidgetContext);
  let { widgets } = appContext;
  return widgets.length ? (
    <Container title="dashboard-test">
      {widgets.map((data, i) => {
        return <Widget data={data} key={data.id} />;
      })}
    </Container>
  ) : (
    <Div>
      <H1>Empty Dashboard.</H1>
      <H1>Go ahead and create some </H1>
      <H1Colored>widgets!</H1Colored>
    </Div>
  );
};

const H1 = styled.h1`
  font-weight: 900;
  font-size: 55px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-item: center;
  align-self: center;
  margin: 0;
  padding: 0;
`;

const Div = styled.div`
  margin: 50px;
`;

const colorChange = keyframes`{
  0%{color: #f4e749;}
  10%{color: #60bbf4;}
  20%{color: aqua;}
  30%{color: #7d42dd;}
  40%{color: #e5903a;}
  50%{color: #a58828;}
  60%{color: #bc3bbc;}
  70%{color: #164a16;}
  80%{color: #d94646;}
  90%{color: #b96c52;}
  100%{color: #bcef32;}
}`;

const H1Colored = styled.h1`
  font-weight: 900;
  font-size: 60px;
  animation-name: ${colorChange};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`;

export default Dashboard;
