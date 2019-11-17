import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { observer } from 'mobx-react';
import { Box, Heading, Paragraph } from 'grommet';

const SpendingRequest: FC<RouteComponentProps> = observer(() => {
  return (
    <Box alignContent="center">
      <Heading level="1">You are about to spend</Heading>
      <Paragraph
        size="xxlarge"
        color="brand"
        margin={{ vertical: 'xsmall' }}
        alignSelf="center"
      >
        {`€ 249`}
      </Paragraph>
      <Paragraph color="status-unknown">
        On item: <em>Millenium MX222BX Standard Set BK</em>
      </Paragraph>
    </Box>
  );
});

export default SpendingRequest;
