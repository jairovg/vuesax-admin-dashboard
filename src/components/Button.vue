<script>
import styles from '~/assets/styles/components/button.module.scss';

export default {
  name: 'Button',
  functional: true,
  props: {
    /**
      * Kind of button is being created
      */
    kind: {
      type: String,
      default: 'primary',
      validator: (value) => [
        'primary',
      ].indexOf(value) !== -1,
    },
  },
  render(h, { props }) {
    const buttonClasses = [
      styles.button,
      {
        [styles.button__primary]: props.kind === 'primary',
      },
    ];
    return (
      <button
        class={buttonClasses}
        type="button"
      >
        Button
      </button>
    );
  },
};
</script>
