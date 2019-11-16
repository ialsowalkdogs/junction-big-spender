import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  Distribution,
  Heading,
  Select,
  Text,
  Paragraph
} from 'grommet';
// import Select as ReactSelect from 'react-select';

const Setup: FC = () => {
  const [startValue, setStartValue] = useState('');
  const [savingsValue, setSavingsValue] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const [budget, setBudget] = useState({});

  const financialStartOptions = [
    'Really bad',
    'Have some savings',
    'Want to grow my riches'
  ];

  const savingsOptions = [
    'None at all',
    '1-2 months of expenses',
    'Over 3 months of expenses'
  ];

  const difficultyOptions = ['Easy mode', 'Hard mode'];

  const goodBudget = [
    { value: '50%: base expenses' },
    { value: '35%: fun money' },
    { value: '15%: savings' }
  ];

  const poorBudget = [
    { value: '50%: base expenses' },
    { value: '35%: savings' },
    { value: '15%: fun money' }
  ];

  const chooseBudget = (start: string, savings: string) => {
    switch (true) {
      case difficulty === 'Hard mode':
      case start === 'Really bad' && savings === 'None at all': {
        setBudget(poorBudget);
      }
    }
  };

  return (
    <Box align="center">
      <Heading level="1">Hello!</Heading>
      <Paragraph>Tell us a bit about yourself.</Paragraph>

      <Paragraph>How well are you doing?</Paragraph>
      <Select
        options={financialStartOptions}
        value={startValue}
        onChange={({ option }) => setStartValue(option)}
      />

      {startValue && (
        <>
          <Paragraph>How much money do you have saved?</Paragraph>
          <Select
            options={savingsOptions}
            value={savingsValue}
            onChange={({ option }) => setSavingsValue(option)}
          />
        </>
      )}

      {startValue && savingsValue && (
        <>
          <Paragraph>How bad do you want this?</Paragraph>
          <Paragraph size="small">
            The greater the challenge, the greater the reward.
          </Paragraph>
          <Select
            options={difficultyOptions}
            value={difficulty}
            onChange={({ option }) => setDifficulty(option)}
          />
        </>
      )}

      {startValue && savingsValue && difficulty && (
        <>
          <Paragraph>Okay. I advise you to set your budget as this:</Paragraph>

          <Button
            primary
            margin="xsmall"
            label="Sounds good! Let's make me rich"
          />
          <Button margin="xsmall" label="Something's wrong. Let me fix that" />
        </>
      )}
    </Box>
  );
};

export default Setup;
