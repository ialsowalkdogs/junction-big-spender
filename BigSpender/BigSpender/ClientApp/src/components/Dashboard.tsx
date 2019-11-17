import React, { FC } from 'react';
import { RouteComponentProps, Link } from '@reach/router';
import { Box, Heading, Paragraph, Meter, Button } from 'grommet';
import { useUserStore } from '../stores/UserStore';
import { observer } from 'mobx-react';
import BlockerSavings from './BlockerSavings';
import SavingPlans from './SavingPlans';
import BasicLivingCosts from './BasicLivingCosts';
import AskYourPal from './AskYourPal';
import FunMoney from './FunMoney';

const Dashboard: FC<RouteComponentProps> = observer(() => {
  const { user, isCreated, goalPercentage } = useUserStore();

  if (!isCreated)
    return (
      <Paragraph alignSelf="center">
        Oops! You don't seem to have a user profile set up.
        <Link to="start">Setup your app now.</Link>
      </Paragraph>
    );
  else
    return (
      <Box background="#202020" pad="large" style={{ height: '100%' }}>
        <Box
          align="stretch"
          alignContent="center"
          justify="between"
          pad="small"
          direction="row"
        >
          <Heading level="1">Fine Pal</Heading>
          <Heading level="2">Balance</Heading>
          <Heading level="2">Saving plan</Heading>
          <Heading level="2">My profile</Heading>
        </Box>

        <Box pad="small">
          <Heading level="3">Account Balance</Heading>
          <Paragraph
            size="xxlarge"
            alignSelf="start"
            margin={{ vertical: '10px' }}
            color="brand"
          >{`€ ${user.currentBalance}`}</Paragraph>
          <Button primary color="brand" href="spend" label="Make a purchase" />
        </Box>

        <Box
          pad="small"
          background="dark-1"
          round="small"
          direction="row"
          justify="between"
        >
          <Box>
            <Paragraph>Good morning, {user.name}!</Paragraph>
            <Heading level="4" margin={{ vertical: 'xsmall' }}>
              Yesterday’s investment return
            </Heading>
            <Paragraph
              size="xxlarge"
              color="accent-4"
              margin={{ vertical: 'xsmall' }}
            >
              € 2.10
            </Paragraph>
          </Box>
          <Box>
            <Heading level="4">You are about to hit your goal!</Heading>
            <Meter
              values={[
                {
                  value: goalPercentage,
                  label: 'Christmas fund',
                  onClick: () => {}
                }
              ]}
              round
              aria-label="meter"
            />
            <Paragraph
              size="large"
              color="accent-4"
              margin={{ vertical: 'xsmall' }}
            >
              {`${user.goal.name}: € ${user.goal.currentAmount}`}
            </Paragraph>
          </Box>
        </Box>

        <Box direction="row" justify="between">
          <BlockerSavings />
          <SavingPlans />
        </Box>

        <Box direction="row" justify="between">
          <BasicLivingCosts />
          <AskYourPal />
        </Box>

        <Box direction="row" justify="between">
          <FunMoney />
        </Box>
      </Box>
    );
});

export default Dashboard;
