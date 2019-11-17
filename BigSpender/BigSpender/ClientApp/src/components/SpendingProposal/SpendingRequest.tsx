import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { observer } from 'mobx-react';

const SpendingRequest: FC<RouteComponentProps> = observer(() => {
  return <div>You are about to spend money.</div>;
});

export default SpendingRequest;
