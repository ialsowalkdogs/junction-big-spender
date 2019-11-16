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

const BasicLivingCosts: FC = observer(() => {
  const { user, totalBasicMonthlyCosts } = useUserStore();
  return (
    <Box
      pad="small"
      margin={{ vertical: 'medium' }}
      background="dark-1"
      round="small"
      width="48%"
    >
      <Heading level="2" alignSelf="center">
        Basic Living Costs
      </Heading>
      <Paragraph
        size="xxlarge"
        color="brand"
        margin={{ vertical: 'xsmall' }}
        alignSelf="center"
      >
        {`€ ${totalBasicMonthlyCosts}`}
      </Paragraph>

      <Table style={{ width: '100%' }}>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              Monthly extractions
            </TableCell>
            <TableCell scope="col" border="bottom">
              {`€ ${totalBasicMonthlyCosts}`}
            </TableCell>
          </TableRow>
        </TableHeader>
        {Object.entries(user.expenses).map(row => {
          return (
            <TableRow>
              <TableCell>{row[0]}</TableCell>
              <TableCell
                verticalAlign="top"
                color="brand"
              >{`€ ${row[1]}`}</TableCell>
            </TableRow>
          );
        })}
      </Table>
    </Box>
  );
});

export default BasicLivingCosts;
