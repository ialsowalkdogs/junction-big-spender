import React, { FC } from 'react';
import { Box, Heading } from 'grommet';

const AskYourPal: FC = () => {
  return (
    <Box
      pad="small"
      margin={{ vertical: 'medium' }}
      background="dark-1"
      round="small"
      width="48%"
    >
      <Heading level="2" alignSelf="center">
        Ask your pal anything
      </Heading>
    </Box>
  );
};

export default AskYourPal;
