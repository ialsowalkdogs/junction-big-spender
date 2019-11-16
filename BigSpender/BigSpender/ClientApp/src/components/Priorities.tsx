import React, { FC, useState } from 'react';
import ReactTags from 'react-tag-autocomplete';
import { Button, Heading } from 'grommet';
import { RouteComponentProps } from '@reach/router';

const Priorities: FC<RouteComponentProps> = () => {
  const priorityOptions = [
    {
      id: 0,
      name: 'Rent'
    },
    { id: 1, name: 'Utilities' },
    { id: 2, name: 'Transportation' }
  ];

  const priorityDefaults = [priorityOptions[0], priorityOptions[1]];
  const [prioritySpending, setPrioritySpending] = useState(priorityDefaults);

  const handleDelete = (tag: any) => {
    const newPrio = prioritySpending.slice(0);
    newPrio.splice(tag, 1);
    setPrioritySpending(newPrio);
  };

  const handleAddition = (tag: any) => {
    const newPrio: any[] = prioritySpending.concat(tag);
    setPrioritySpending(newPrio);
  };

  return (
    <div>
      <Heading level="1">Hello!</Heading>

      <Heading level="2">
        Define your <strong>priority</strong> spending areas:
      </Heading>
      <p>
        Things that you pay for every month. These should be about the same
        amount each time, month-in month-out.
      </p>
      <ReactTags
        tags={prioritySpending}
        suggestions={priorityOptions}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
      />

      <Heading level="2">
        Define your <strong>limited</strong> spending areas:
      </Heading>
      <p>Things that you spend money on but do not pay for them regularly. </p>

      <Heading level="2">
        Define your <strong>dangerous</strong> spending areas:
      </Heading>
      <p>Things that you want to spend as little money on as possible</p>
      <Button primary label="I'm set! Take me to the app" />
    </div>
  );
};

export default Priorities;
