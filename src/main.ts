import Vue from 'vue';
// @ts-ignore
import wrap from '@vue/web-component-wrapper';

import MyA from './components/MyA.vue';

const CustomElementMyA = wrap(Vue, MyA);
window.customElements.define('my-a', CustomElementMyA);
