import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ShoppingBag from './ShoppingBag';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/ShoppingBag/ShoppingBag.tsx',
  component: ShoppingBag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ShoppingBag>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ShoppingBag> = (args) => <ShoppingBag />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
