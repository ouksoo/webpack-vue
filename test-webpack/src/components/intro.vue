<template>
    <div>
        <h1>Intro</h1>
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            msg: 'message'
        };
    },
    created () {
        this.EventBus.$on('clickevent', this.onIntro);
        this.EventBus.$on('intro-link', this.onIntroLink);
    },
    methods : {
        onIntro () {
            console.log('on intro');
            this.$store.state.who = 'Kim bong jin';
        },
        onIntroLink () {
            this.msg = 'intro string';
            console.log('intro string');
        }
    }
};
</script>

<style scoped>

</style>
