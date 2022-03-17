// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta } from '@storybook/react';

import Label, { LabelProps } from './';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const defaultArgs: LabelProps = {
  children: 'Name:',
};

const Template = (args: LabelProps) => <Label {...args} />;
export const Primary = Template.bind({});
Primary.args = defaultArgs;
