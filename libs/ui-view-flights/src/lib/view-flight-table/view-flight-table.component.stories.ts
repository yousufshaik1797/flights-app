import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ViewFlightTableComponent } from './view-flight-table.component';

export default {
  title: 'ViewFlightTableComponent',
  component: ViewFlightTableComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<ViewFlightTableComponent>;

const Template: Story<ViewFlightTableComponent> = (args: ViewFlightTableComponent) => ({
  component: ViewFlightTableComponent,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}