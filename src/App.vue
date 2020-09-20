<template>
  <div
    id="app"
    class="app"
  >
  <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: 'Hello World !!!',
  }),
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

.app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
}

h1 {
  text-align: center;
}
</style>
