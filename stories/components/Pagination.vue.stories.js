/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions';
import Pagination from '~/components/Pagination.vue';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    currentPage: 1,
    items: [
      {
        page: 1,
        href: '1',
      },
      {
        page: 2,
        href: '2',
      },
    ],
  },
};

export const Default = (args, { argTypes }) => ({
  components: { Pagination },
  props: Object.keys(argTypes),
  render() {
    const onChange = (page, event) => {
      event.preventDefault();
      action('onChange')(event);
    };

    return (
      <Pagination
        current-page={this.currentPage}
        items={this.items}
        onChange={onChange}
      />
    );
  },
});
