import React, { FC } from 'react';
import { Box, Heading, Select, Paragraph } from 'grommet';
// import Select as ReactSelect from 'react-select';

const Setup: FC = () => {
  return (
    <Box align="center">
      <Heading level="1">Hello!</Heading>
      <Paragraph>Tell us a bit about yourself.</Paragraph>

      <Paragraph>How well are you doing?</Paragraph>
      <Select
        options={['small', 'medium', 'large']}
        // value={value}
        // onChange={({ option }) => setValue(option)}
      />
    </Box>
  );
};

export default Setup;
