import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputText } from "./InputText";
export default {
    title: 'Defaul/InputText',
    component: InputText,
    argTypes: {
        backgroundColor: { control: 'color' },
        inputType : {control: 'select', options:['text', 'number']}
    }
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
export const Medium = Template.bind({});
Medium.args = {
    size: 'medium'
};
export const Small = Template.bind({});
Small.args = {
  size: 'small',
};