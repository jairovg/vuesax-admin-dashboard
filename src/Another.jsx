import './another.scss';

export default {
  name: 'Another',
  data: () => ({
    message: 'Hello World !!!',
  }),
  render() {
    return (
      <div id="another" class="another"
      >
        <h1 class='h1'>{ this.message }</h1>
        <div>multiline
    content</div>
      </div>
    );
  },
};
