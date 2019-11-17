import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { Box, Heading, Paragraph, Button } from 'grommet';

const SpendApproved: FC<RouteComponentProps> = () => {
  return (
    <Box
      alignContent="center"
      background="#202020"
      pad="large"
      style={{ height: '100%' }}
    >
      <Heading level="1">Pal says YES!</Heading>

      <Paragraph color="status-unknown">
        You can go ahead and buy your <u>Millenium MX222BX Standard Set BK</u>{' '}
        for
      </Paragraph>

      <Paragraph
        size="xxlarge"
        color="brand"
        margin={{ vertical: 'xsmall' }}
        alignSelf="center"
      >
        {`€ 249`}
      </Paragraph>

      <Button
        primary
        color="brand"
        label="Pay for your purchase"
        margin={{ vertical: '10px' }}
      />
    </Box>
  );
};

export default SpendApproved;
