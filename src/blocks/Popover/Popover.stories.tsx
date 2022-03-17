import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Popover, { PopoverProps } from '.';
import Button from '../Button';

export default {
  title: 'Popover',
  component: Popover,
} as ComponentMeta<typeof Popover>;

const defaultArgs: PopoverProps = {
  children: <Button>Popup</Button>,
  popover: (
    <div
      style={{
        height: 40,
        width: 60,
        background: 'white',
        border: '1px solid gray',
      }}
      id="dropdown-1"
    >
      popover
    </div>
  ),
};
const Template = (args: PopoverProps) => <Popover {...args} />;

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const onHover = Template.bind({});
onHover.args = { ...defaultArgs, on: 'hover' };
