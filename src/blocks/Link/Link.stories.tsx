import React from 'react';
import { ComponentMeta } from '@storybook/react';
import Link, { LinkProps } from '.';
import { FiHome } from 'react-icons/fi';

export default {
  title: 'Link',
  component: Link,
} as ComponentMeta<typeof Link>;

const defaultArgs: LinkProps = {
  title: 'Home',
  id: 'home',
  action: console.log,
};
const Template = (args: LinkProps) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const asAnchor = Template.bind({});
asAnchor.args = { ...defaultArgs, href: '/?path=/story/link--primary' };

export const withIcon = Template.bind({});
withIcon.args = { ...defaultArgs, icon: <FiHome /> };
