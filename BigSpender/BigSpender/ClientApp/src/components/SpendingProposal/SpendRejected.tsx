import React, { FC, useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import {
  Box,
  Heading,
  Paragraph,
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell
} from 'grommet';

const SpendRejected: FC<RouteComponentProps> = () => {
  return (
    <Box
      align="center"
      background="#202020"
      pad="large"
      style={{ height: '100%' }}
      animation="fadeIn"
    >
      <Heading level="1">Pal says NO!</Heading>
      <Paragraph>And here is the why:</Paragraph>
      <Box pad="small" background="dark-1" round="small" width="medium">
        <Paragraph>You made this purchase:</Paragraph>
        <Table style={{ width: '100%' }}>
          <TableHeader>
            <TableRow>
              <TableCell scope="col" border="top">
                Fender SQ LTD Guitar
                <Paragraph size="small">1 Jan 2018</Paragraph>
              </TableCell>
              <TableCell scope="col" border="top" verticalAlign="top">
                € 175.00
              </TableCell>
            </TableRow>
          </TableHeader>
          <Paragraph>You have used the item: </Paragraph>
          <TableRow>
            <TableCell scope="col" border="top">
              {`< 5 times`}
            </TableCell>
            <TableCell scope="col" border="top" verticalAlign="top">
              in 1 year
            </TableCell>
          </TableRow>
        </Table>
      </Box>

      <Paragraph>
        Based on <strong>your purchase history of similar products</strong>, I
        think that you will not use it a lot. That makes the ‘cost-per-lifetime’
        for this product <strong>very high</strong>.
      </Paragraph>
    </Box>
  );
};

export default SpendRejected;
