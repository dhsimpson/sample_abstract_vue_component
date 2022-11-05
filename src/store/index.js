import {createStore} from 'vuex';
import mainState from '@/store/filter/state.js';
import mainGetters from '@/store/filter/getters.js';
import mainMutations from '@/store/filter/mutations.js';
import mainActions from '@/store/filter/actions.js';

export default createStore({
    state: mainState,
    getters: mainGetters,
    mutations: mainMutations,
    actions: mainActions
})