import React, { FC } from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { useUserStore } from '../stores/UserStore';
import { observer } from 'mobx-react';

const FunMoney: FC = observer(() => {
  const { funMoney } = useUserStore();

  const palSays = () => {
    if (funMoney < 0) {return 'Whoa there partner! Work on those savings first.'} else {return "Don't spend it all at once!"}
  };

  return (
    <Box
      pad="small"
      margin={{ vertical: 'medium' }}
      background="dark-1"
      round="small"
      width="48%"
    >
      <Heading level="2" alignSelf="center">
        Fun Money
      </Heading>
      <Paragraph
        size="xxlarge"
        color="accent-4"
        margin={{ vertical: 'xsmall' }}
        alignSelf="center"
      >
        {`€ ${funMoney}`}
      </Paragraph>
      <Paragraph size="small" margin="xxsmall">
        Your pal says:
      </Paragraph>
      <Paragraph>{palSays()}</Paragraph>
    </Box>
  );
});

export default FunMoney;
