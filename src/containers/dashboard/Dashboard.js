import React, { useContext } from 'react';
import { WidgetContext } from '../../context/WidgetContext';
import Widget from '../../components/widget/Widget';
import styled from 'styled-components';

const Dashboard = () => {
  const appContext = useContext(WidgetContext);
  let { widgets } = appContext;
  return widgets.length ? (
    <Container>
      <ul>
        {widgets.map((data, i) => {
          return <Widget data={data} key={data.id} />;
        })}
      </ul>
    </Container>
  ) : (
    <div className="empty">
      Empty Dashboard. Go ahead and create some widgets!.
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: white;
`;

export default Dashboard;
