import React, { FC } from 'react';
import { observer } from 'mobx-react';
import {
  Box,
  Heading,
  Paragraph,
  Table,
  TableHeader,
  TableRow,
  TableCell
} from 'grommet';
import { useUserStore } from '../stores/UserStore';

const BlockerSavings: FC = observer(() => {
  const { user, totalMonthlyBlockers } = useUserStore();
  return (
    <Box
      pad="small"
      margin={{ vertical: 'medium' }}
      background="dark-1"
      round="small"
      width="48%"
    >
      <Heading level="2" alignSelf="center">
        Blocker Savings
      </Heading>
      <Paragraph
        size="xxlarge"
        color="status-ok"
        margin={{ vertical: 'xsmall' }}
        alignSelf="center"
      >
        € 855.00
      </Paragraph>

      <Table style={{ width: '100%' }}>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Monthly extractions
            </TableCell>
            <TableCell scope="col" border="bottom">
              {`€ ${totalMonthlyBlockers}`}
            </TableCell>
          </TableRow>
        </TableHeader>
        {user.monthlySavings.map(row => {
          return (
            <TableRow>
              <TableCell>
                {row.name}
                <Paragraph size="small">{row.description}</Paragraph>
              </TableCell>
              <TableCell
                verticalAlign="top"
                color="status-ok"
              >{`€ ${row.amount}`}</TableCell>
            </TableRow>
          );
        })}
      </Table>
    </Box>
  );
});

export default BlockerSavings;
