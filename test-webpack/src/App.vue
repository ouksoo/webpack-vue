<template>
  <div id="app">
    <navi-component></navi-component>
    <transition name="slide-fade">
        <router-view />
    </transition>
    <personal-container :greeting=appsmo></personal-container>
  </div>
</template>

<script>
import 'expose-loader?$!expose-loader?jQuery!jquery';
import Navigation from '@/components/navigation';

export default {
    name: 'Apps',
    data () {
        return {
            greeting: [],
            appsmo: 'first',
            buttonShow: true,
        };
    },
    components: {
        'navi-component': Navigation,
        'personal-container': {
            template: '<div>{{ greeting }}, {{ name }}, {{ whatis }} -- vuex : whois = {{ whois }}</div>',
            props : {
                greeting: {
                    type: String,
                    default() {
                        return 'Hejin';
                    }
                },
                whatis: {
                    type: Number,
                    default() {
                        return 10;
                    }
                }
            },
            computed : {
                whois () {
                    return this.$store.state.who;
                }
            },
            data () {
                return {
                    name: 'Chris'
                }
            },
        },
    },
    created () {

    },
    methods: {
        updateInput() {
            
        },
        updateResults() {

        },
    },
    
};
</script>

<style lang="scss" scope>
@import 'assets/scss/main.scss';
</style>
