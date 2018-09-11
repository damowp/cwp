 /* jshint esversion: 6 */
import Vue from 'vue';
import weex from 'weex-vue-render';

weex.init(Vue);

Vue.config.productionTip = false;

const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

const srcContext = require.context('../../src', true, /^\.\/(?!entry(\.js)?$)/);
srcContext.keys().forEach(srcContext);
