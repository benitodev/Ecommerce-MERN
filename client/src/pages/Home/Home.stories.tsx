import React from 'react';
import { withReactContext } from 'storybook-react-context';
import { MemoryRouter } from 'react-router-dom';
import { StoryFn, Meta } from '@storybook/react';
import Home from './Home';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Pages/Home/Home.tsx',
  component: Home,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          {' '}
          <Story />{' '}
        </MemoryRouter>
      </Provider>
    ),
  ],
} as Meta<typeof Home>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Home> = (args) => <Home />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
