import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import statistic from './module/statistics';
import comment from './module/comments';
import base from './module/base';
import marker from './module/markers';

export default new Vuex.Store({
  modules: {
    statistic,
    comment,
    base,
    marker
  }
})