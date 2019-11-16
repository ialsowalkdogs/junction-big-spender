import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { Box, Heading, Paragraph, Button } from 'grommet';
import piggyBank from '../assets/bank-account.svg';
import cat from '../assets/cat.svg';

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

      <Box pad="small" background="neutral-2" direction="row" round="small">
        <Box direction="column" width="75%">
          <Heading level="4">Pocket Money Plan</Heading>
          <Paragraph size="small">
            For every sum you spend, 2% will be extracted to your savings.
          </Paragraph>
          <Button primary color="brand" label="Join" />
        </Box>
        <img src={piggyBank} />
      </Box>

      <Box pad="small" background="neutral-1" direction="row" round="small">
        <Box direction="column" width="75%">
          <Heading level="4">“My First Cat” Plan</Heading>
          <Paragraph size="small">
            The goal is to save up the expenses for taking care of a cat, which
            includes vet health insurance, cat food, and cat toys.
          </Paragraph>
          <Button primary color="accent" label="Join" />
        </Box>
        <img src={cat} />
      </Box>
    </Box>
  );
});

export default SavingPlans;
