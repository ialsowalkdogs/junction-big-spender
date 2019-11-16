import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';

const Dashboard: FC<RouteComponentProps> = () => {
  return (
    <div>
      A dashboard will be here.
      <Link to="setup">Setup your app</Link>
    </div>
  );
};

export default Dashboard;
