import React from 'react';
import { Stack, Checkbox, IconButton } from 'office-ui-fabric-react/';

export default function TaskItem() {
  return (
    <Stack horizontal horizontalAlign="space-between" verticalAlign="center">
      <Checkbox label="hello" onChange={ () => console.log( 'hello' ) } checked={ false } />
      <Stack horizontal>
        <IconButton iconProps={{ iconName: 'Edit' }} onClick = {() => console.log('Edit')} ariaLabel="Edit"/>
        <IconButton iconProps={{ iconName: 'Delete' }} onClick={() => console.log('Delete')} ariaLabel="Delete"/>
      </Stack>
    </Stack>
  );
}
