import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Box, Heading } from 'grommet';

const SavingPlans: FC = observer(() => {
  return (
    <Box
      pad="small"
      margin={{ vertical: 'medium' }}
      background="dark-1"
      round="small"
      width="48%"
    >
      <Heading level="2" alignSelf="center">
        Saving Plans
      </Heading>
    </Box>
  );
});

export default SavingPlans;
