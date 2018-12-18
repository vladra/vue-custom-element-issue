import Vue from 'vue';
import VueCustomElement from 'vue-custom-element';

import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueCustomElement);

Vue.customElement('my-widget', App);
