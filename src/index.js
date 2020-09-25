import Vue from 'vue';
import App from './App.vue';
import Another from './Another.jsx';
import AnotherSample from './AnotherSample.vue';

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  components: { App },
  render(createElement) {
    return createElement('App');
  },
});

/* eslint-disable-next-line no-new */
new Vue({
  el: '#another',
  components: { Another },
  render(createElement) {
    return createElement('Another');
  },
});

/* eslint-disable-next-line no-new */
new Vue({
  el: '#another-sample',
  components: { AnotherSample },
  render(createElement) {
    return createElement('AnotherSample');
  },
});
