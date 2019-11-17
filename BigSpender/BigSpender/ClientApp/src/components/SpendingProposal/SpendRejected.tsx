import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Heading, Paragraph, Button } from 'grommet';

const SpendRejected: FC<RouteComponentProps> = () => {
  return (
    <Box
      alignContent="center"
      background="#202020"
      pad="large"
      style={{ height: '100%' }}
    >
      <Heading level="1">Pal says NO!</Heading>
    </Box>
  );
};

export default SpendRejected;
