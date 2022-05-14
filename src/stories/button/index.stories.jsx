import React from 'react';
import Button from '.';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'cancel', 'default'],
      control: {type: 'select'},
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary',
};

export const Cancel = Template.bind({});
Cancel.args = {
  type: 'cancel',
  label: 'Cancel',
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  label: 'Default',
};
