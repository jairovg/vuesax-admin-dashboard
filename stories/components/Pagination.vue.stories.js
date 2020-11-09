import Pagination from '~/components/Pagination.vue';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  args: {
    currentPage: 1,
    items: [
      {
        page: 1,
      },
      {
        page: 2,
      },
    ],
  },
};

export const Default = (args, { argTypes }) => ({
  components: { Pagination },
  props: Object.keys(argTypes),
  render() {
    return (
      <Pagination
        current-page={this.currentPage}
        items={this.items}
      />
    );
  },
});