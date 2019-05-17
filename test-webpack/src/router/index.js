import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/index';
import Intro from '@/components/intro';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/intro',
            component: Intro
        }
    ]
});

// <router-link v-bind:to="{ name : 'Index' }"></router-link>
