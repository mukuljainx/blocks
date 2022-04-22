import React from 'react';
import { ComponentMeta } from '@storybook/react';
import styled from 'styled-components';
import SideNav, { SideNavProps } from '.';
import { FiHome, FiHardDrive, FiMessageSquare } from 'react-icons/fi';

const BG = styled.div`
  background-color: ${({ theme }) => theme.colors.grayScale[1]};
  height: 1200px;
  margin: -16px;
`;

export default {
  title: 'navigation/SideNav',
  component: SideNav,
} as ComponentMeta<typeof SideNav>;

const defaultArgs: SideNavProps = {
  items: [
    { title: 'Home', id: 'home', icon: <FiHome />, action: console.log },
    {
      title: 'Messages',
      id: 'message',
      icon: <FiMessageSquare />,
      action: console.log,
    },
    {
      title: 'Storage',
      id: 'storage',
      icon: <FiHardDrive />,
      action: console.log,
    },
  ],
};
const Template = (args: SideNavProps) => {
  const [active, setActive] = React.useState(args.items[0].id);
  console.log(2, active);
  return (
    <BG>
      <SideNav
        activeItem={active}
        onItemClick={(_, { id }) => setActive(id)}
        width="180px"
        height="100%"
        {...args}
      />
    </BG>
  );
};

export const Primary = Template.bind({});
Primary.args = defaultArgs;
