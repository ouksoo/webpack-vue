<template>
    <div>
        <ul class="navigations clearfix">
            <li><a :href=menu1.link>{{ menu1.text }}</a></li>
            <li><a :href=menu2.link>{{ menu2.text }}</a></li>
            <li><a :href=menu3.link>{{ menu3.text }}</a></li>
            <li><a :href=menu4.link>{{ menu4.text }}</a></li>
        </ul>
        <button v-on:click="sender">This component method</button>
        <button v-on:click="EventBus.$emit('click-button')">Event Trigger</button>
        <button @click="EventBus.$emit('clickevent')">@click event test</button><br />
        <span>함수 실행 테스트 : {{ `${hithere()}` }}</span>
    </div>
</template>

<script>
export default {
    name: 'navigations',
    data () {
        return {
            menu1 : {
                'text' : 'menu1',
                'link' : '/#/',
            },
            menu2 : {
                'text' : 'menu2',
                'link' : '/#/intro',
            },
            menu3 : {
                'text' : 'menu3',
                'link' : '/#/product',
            },
            menu4 : {
                'text' : 'menu4',
                'link' : '/#/contact',
            }
        }
    },
    computed : {

    },
    created : () => {
        
    },
    methods : {
        sender() {
            console.log('sender');
        },
        onReceive(text) {

        },
        hithere() {
            return 'my name is';
        },
        clickButton() {
            console.log('clickButton');
        },
    }
};
</script>

<style scope>

</style>

