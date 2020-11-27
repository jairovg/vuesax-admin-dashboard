<script>
import styles from '~/assets/styles/components/pagination.module.scss';

export default {
  name: 'Pagination',
  functional: true,
  props: {
    /**
     * @typedef Page
     * @type {object}
     * @property {number} page - page number is representing.
     * @property {string} href - page relative url.
     */
    /**
     * Pagination pages array
     * @type {Page[]}
     */
    items: {
      type: Array,
      default: () => ([]),
      required: true,
      validator: (value) => value.every((obj) => (!Reflect.has(obj, 'page')
        || Number.isInteger(obj.page))
        && (!Reflect.has(obj, 'href')
        || typeof obj.href === 'string')),
    },
    /**
      * The current page where the user is
      */
    currentPage: {
      type: Number,
      required: true,
      default: 1,
    },
  },
  render(h, { props, listeners }) {
    const { items, currentPage } = props;
    const { change: onChange } = listeners;

    const pageItem = ({ page, href }, ix) => {
      const liClasses = ([
        styles.pagination__page,
        {
          [styles['pagination__page--is-current']]: currentPage === page,
          [styles['pagination__page--is-first']]: ix === 0,
          [styles['pagination__page--is-last']]: ix === items.length - 1,
        },
      ]);

      const ariaLabel = currentPage === page
        ? `Current page, ${page}`
        : `Goto page ${page}`;
      const ariaCurrent = currentPage === page;

      const liContent = currentPage === page
        ? page
        : (<a
            class={ styles['pagination__page-link'] }
            href={ href }
            onClick={ onChange.bind(this, { to: page, href }) }
          >{ page }</a>);

      return (
        <li
          class={ liClasses }
          aria-label={ ariaLabel }
          aria-current={ ariaCurrent }
        >
          { liContent }
        </li>
      );
    };

    return (
      <nav aria-label="Pagination Navigation">
        <ul class={ styles.pagination }>
          { items.map(pageItem) }
        </ul>
      </nav>
    );
  },
};
</script>
