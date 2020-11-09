<script>
export default {
  name: 'Pagination',
  functional: true,
  props: {
    items: {
      type: Array,
      default: () => ([]),
      required: true,
      validator: (value) => value.every((obj) => !Reflect.has(obj, 'page')
        || Number.isInteger(obj.page)),
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  render(h, { props }) {
    const { items, currentPage } = props;
    const pageItem = ({ page }) => {
      const ariaLabel = currentPage === page
        ? `Current page, ${page}`
        : `Goto page ${page}`;

      const ariaCurrent = currentPage === page;

      return (
        <li
          aria-label={ariaLabel}
          aria-current={ariaCurrent}
        >{ page }</li>);
    };

    return (
      <nav aria-label="Pagination Navigation">
        <ul>
          { items.map(pageItem) }
        </ul>
      </nav>
    );
  },
};
</script>
