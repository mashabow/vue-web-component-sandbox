import Vue from 'vue';
import store from './store';
// @ts-ignore
import wrap from '@vue/web-component-wrapper';

const CustomElementMyA = wrap(
  Vue,
  () => import('./components/MyA.vue').then((Component) => {
    // @ts-ignore
    Component.default.store = store;
    return Component.default;
  }),
);

window.customElements.define('my-a', CustomElementMyA);
