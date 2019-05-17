// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import 'es6-promise/auto';
import { mapState } from 'vuex';

Vue.config.productionTip = false;
Vue.prototype.EventBus = new Vue();
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        who: 'Jang he rin'
    },
    getters : {

    },
    mutations : {
        increment (state) {
            state.count++
        }
    } 
});


/* eslint-disable no-new */
new Vue({
    el: '#app',
    data: {
        greeting: 'Hi',
    },
    router,
    store,
    template: '<App/>',
    components: { 
        'App' : App,
    },
    created: () => {
        
    },
    methods: {
        
    },
});

