import AppBar from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Components/AppBar',
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = () => {
  return (
    <div
      style={{
        background: `linear-gradient(15deg, rgba(0, 0, 0, 0.2) 10%, transparent 10%),
      linear-gradient(20deg, transparent 75%, rgba(0, 0, 0, 0.2) 75%),
      linear-gradient(
        176deg,
        transparent 50%,
        rgba(255, 255, 255, 0.05) 50%,
        transparent 100%
      ),
      radial-gradient(
        circle,
        #bc5297 0%,
        rgba(134, 45, 165, 1) 50%,
        rgba(24, 86, 144, 1) 75%
      )`,
      }}
    >
      <AppBar />
      <div>
        {[...new Array(72)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
          )
          .join('\n')}
      </div>
    </div>
  );
};
