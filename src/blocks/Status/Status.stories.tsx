import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Status, { StatusProps } from './';

export default {
  title: 'Status',
  component: Status,
} as ComponentMeta<typeof Status>;

const defaultArgs: StatusProps = { children: 'Completed' };
const Template = (args: StatusProps) => <Status {...args} />;
export const Primary = Template.bind({});
Primary.args = defaultArgs;
