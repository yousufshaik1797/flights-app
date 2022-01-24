import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ViewFlightTableComponent } from './view-flight-table.component';

export default {
  title: 'ViewFlightTableComponent',
  component: ViewFlightTableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<ViewFlightTableComponent>;

const Template: Story<ViewFlightTableComponent> = (
  args: ViewFlightTableComponent
) => ({
  component: ViewFlightTableComponent,
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  tableHeader: ['Heading1', 'Heading1', 'Heading1', 'Heading1'],
  tableData: [
    {
      id: 1,
      from: 'Visakapatnam',
      to: 'Mallorca',
      date: new Date().toISOString(),
    },
    {
      id: 2,
      from: 'Washington',
      to: 'Barcelona',
      date: new Date().toISOString(),
    },
    {
      id: 3,
      from: 'Mallorca',
      to: 'Ibiza',
      date: new Date().toISOString(),
    },
    {
      id: 3,
      from: 'Mallorca',
      to: 'Ibiza',
      date: new Date().toISOString(),
    },
    {
      id: 3,
      from: 'Mallorca',
      to: 'Ibiza',
      date: new Date().toISOString(),
    },
    {
      id: 3,
      from: 'Mallorca',
      to: 'Ibiza',
      date: new Date().toISOString(),
    },
    {
      id: 3,
      from: 'Mallorca',
      to: 'Ibiza',
      date: new Date().toISOString(),
    },
    {
      id: 3,
      from: 'Mallorca',
      to: 'Ibiza',
      date: new Date().toISOString(),
    },
    {
      id: 4,
      from: 'Visakapatnam',
      to: 'Tirupathi',
      date: new Date().toISOString(),
    },
  ],
};
