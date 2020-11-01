import Button from '~/components/Button.vue';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    kind: {
      control: {
        type: 'inline-radio',
        options: ['primary'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { Button },
  props: Object.keys(argTypes),
  template: '<Button :kind="kind" />',
});

export const Primary = Template.bind({});
Primary.args = {
  kind: 'primary',
};
