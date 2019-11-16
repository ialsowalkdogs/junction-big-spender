import React, { FC, useState } from 'react';
import {
  Box,
  Button,
  Distribution,
  FormField,
  Heading,
  Select,
  Text,
  TextInput,
  Paragraph,
  Form
} from 'grommet';
import { RouteComponentProps, Link } from '@reach/router';
import { observer } from 'mobx-react';
import { useUserStore } from '../stores/UserStore';

const BasicInfo: FC<RouteComponentProps> = observer(() => {
  const {
    user,
    setUser,
    setMonthlyIncome,
    setCurrentBalance,
    setExpenses
  } = useUserStore();

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    setUser(value);
  };

  const onIncomeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    setMonthlyIncome(+value);
  };

  const onBalanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value }
    } = event;
    setCurrentBalance(+value);
  };

  const onExpenseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value, id }
    } = event;
    setExpenses(id, value);
  };

  return (
    <Box align="center">
      <Heading level="1">Let's get to know each other.</Heading>

      <Paragraph>How can I call you?</Paragraph>
      <FormField label="Name">
        <TextInput
          placeholder="Enter your name"
          value={user.name}
          onChange={e => onNameChange(e)}
        />
      </FormField>

      <Paragraph>How much money do you make per month?</Paragraph>
      <FormField label="Monthly income">
        <TextInput
          placeholder="Enter your monthly income"
          type="number"
          value={user.monthlyIncome}
          onChange={e => onIncomeChange(e)}
        />
      </FormField>

      <Paragraph>How much money do you have now?</Paragraph>
      <Paragraph size="small">
        Think of everything: savings, deposit, loose pocket change...
      </Paragraph>
      <FormField label="Current balance">
        <TextInput
          placeholder="Enter your current balance"
          type="number"
          value={user.currentBalance}
          onChange={e => onBalanceChange(e)}
        />
      </FormField>

      <Paragraph>
        How much money do you <strong>spend</strong> per month?
      </Paragraph>
      <Form>
        <FormField label="Housing">
          <TextInput
            id="housing"
            placeholder="Rent, mortgage or anything else"
            type="number"
            value={user.expenses['housing']}
            onChange={e => onExpenseChange(e)}
          />
        </FormField>
        <FormField label="Utilities">
          <TextInput
            id="utilities"
            placeholder="Electricity, water..."
            type="number"
            value={user.expenses['utilities']}
            onChange={e => onExpenseChange(e)}
          />
        </FormField>
        <FormField label="Food">
          <TextInput
            id="food"
            placeholder="Grocery shopping and daily expenses"
            type="number"
            value={user.expenses['food']}
            onChange={e => onExpenseChange(e)}
          />
        </FormField>
        <FormField label="Entertainment">
          <TextInput
            id="entertainment"
            placeholder="Restaurants, bars, going out"
            type="number"
            value={user.expenses['entertainment']}
            onChange={e => onExpenseChange(e)}
          />
        </FormField>
        <Link to="/setup">
          <Button type="submit" label="Next" primary />
        </Link>
      </Form>
    </Box>
  );
});

export default BasicInfo;
