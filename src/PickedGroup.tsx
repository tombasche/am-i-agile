import React from 'react';
import { Group } from './Group';

type GroupProps = {
  group?: Group
}

export const PickedGroup = (props: GroupProps) => {

  if (!props.group) {
    return null;
  }
  let group: Group = props.group

  return (
    <div>
      <h1>{group.name}{group.name ? '!' : ''}</h1>
      {group.members.join(", ")}
    </div>
  )
}
