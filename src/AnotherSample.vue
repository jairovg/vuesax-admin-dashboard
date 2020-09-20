<script>
export default {
  data: () => ({
    message: 'Hello World !!!',
  }),
  render() {
    return (
      <div id="another-sample" class="another-sample"
      >
        <h1 class='h1'>{ this.message }</h1>
        <div>multiline
    content</div>
      </div>
    );
  },
  name: 'AnotherSample'
};
</script>

<style lang="scss">
.another-sample {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
}
</style>
