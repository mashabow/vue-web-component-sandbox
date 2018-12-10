import Vue from 'vue';
// @ts-ignore
import wrap from '@vue/web-component-wrapper';

import MyA from './components/MyA.vue';
import MyB from './components/MyB.vue';

window.customElements.define('my-a', wrap(Vue, MyA));
window.customElements.define('my-b', wrap(Vue, MyB));
