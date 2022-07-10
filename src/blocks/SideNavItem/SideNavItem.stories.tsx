import React from 'react';
import { ComponentMeta } from '@storybook/react';
import SideNavItem, { SideNavItemProps } from '.';
import { FiHome } from 'react-icons/fi';

export default {
  title: 'SideNavItem',
  component: SideNavItem,
} as ComponentMeta<typeof SideNavItem>;

const defaultArgs: SideNavItemProps = {
  title: 'Home',
  id: 'home',
  action: console.log,
};
const Template = (args: SideNavItemProps) => <SideNavItem {...args} />;

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const asAnchor = Template.bind({});
asAnchor.args = { ...defaultArgs, href: '/?path=/story/link--primary' };

export const withIcon = Template.bind({});
withIcon.args = { ...defaultArgs, icon: <FiHome /> };
