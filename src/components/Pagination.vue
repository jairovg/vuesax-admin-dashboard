<script>
export default {
  name: 'Pagination',
  functional: true,
  props: {
    items: {
      type: Array,
      default: () => ([]),
      required: true,
      validator: (value) => value.every((obj) => (!Reflect.has(obj, 'page')
        || Number.isInteger(obj.page))
        && (!Reflect.has(obj, 'href')
        || typeof obj.href === 'string')),
    },
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  render(h, { props, listeners }) {
    const { items, currentPage } = props;
    const { change: onChange } = listeners;

    const pageItem = ({ page, href }) => {
      const ariaLabel = currentPage === page
        ? `Current page, ${page}`
        : `Goto page ${page}`;

      const ariaCurrent = currentPage === page;
      const liContent = currentPage === page
        ? page
        : (<a
            href={ href }
            onClick={ onChange.bind(this, { to: page, href }) }
          >{ page }</a>);

      return (
        <li
          aria-label={ ariaLabel }
          aria-current={ ariaCurrent }
        >
          { liContent }
        </li>
      );
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
