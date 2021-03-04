import React, { useContext } from 'react';
import { WidgetContext } from '../../context/WidgetContext';
import Widget from '../../components/widget/Widget';
import styled from 'styled-components';

const Dashboard = () => {
  const appContext = useContext(WidgetContext);
  let { widgets } = appContext;
  return widgets.length ? (
    <Container>
      {widgets.map((data, i) => {
        return <Widget data={data} key={data.id} />;
      })}
    </Container>
  ) : (
    <div className="empty">
      Empty Dashboard. Go ahead and create some widgets!.
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export default Dashboard;
