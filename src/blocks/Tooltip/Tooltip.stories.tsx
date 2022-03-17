import React from 'react';
import { ComponentMeta } from '@storybook/react';

import Tooltip, { TooltipProps } from '.';
import Button from '../Button';

export default {
  title: 'Tooltip',
  component: Tooltip,
} as ComponentMeta<typeof Tooltip>;

const defaultArgs: TooltipProps = {
  children: <Button>Popup</Button>,
  content: 'This is a tooltip',
};
const Template = (args: TooltipProps) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = defaultArgs;

export const CustomTooltip = Template.bind({});
CustomTooltip.args = {
  ...defaultArgs,
  content: (
    <div>
      <h4 style={{ marginTop: 0, marginBottom: 8 }}>Heading</h4>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet
      consectetur ligula, eu condimentum nulla. Nunc accumsan lectus sed felis
      porttitor fringilla. Quisque vitae est vitae nisi pharetra ultricie
    </div>
  ),
};
