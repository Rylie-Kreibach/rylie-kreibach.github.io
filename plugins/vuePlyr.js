// plugins/vue-plyr.js
import Vue from 'vue';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

if (process.client) {
  Vue.use(VuePlyr);
}