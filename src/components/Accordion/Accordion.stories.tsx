import React, {useState} from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {action} from "@storybook/addon-actions";

import { Accordion } from './Accordion';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
 /*   argTypes: {
        backgroundColor: {control: 'color'},
    },*/
} /*as ComponentMeta<typeof Rating>;*/

const callback = action("accordion mode change event fired")


 export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={true} onChange={callback} />
 export const UserUnCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={false} onChange={callback} />

  export const OnOffChanging = () => {
     const [value, setValue] = useState<boolean>(true)
     return <Accordion titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}/>
  }
/*
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    primary: true,
    label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};
*/
