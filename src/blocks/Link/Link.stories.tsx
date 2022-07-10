import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Link, { LinkProps } from '.';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const defaultArgs: LinkProps = {
  children: 'google',
  href: 'https://www.google.com',
};
const Template = (args: LinkProps) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = defaultArgs;
