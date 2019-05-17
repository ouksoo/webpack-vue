<template>
    <div>
        <h1>Index</h1>
        <div v-if="ifelse">
            How is that!
            <a href="#" @click="EventBus.$emit('intro-link')">intro go</a>
        </div>
        <div v-else>
            How was that!
        </div>
        <p>{{ name }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: '',
    data () {
        return {
            ifelse: true,
            name: 'eoksoo kim',
        };
    },
    created () {
        this.EventBus.$on('click-button', () => {
            this.okmy = !this.okmy;
            this.name = 'mijin';
        });
    }
};
</script>

<style scoped>

</style>
