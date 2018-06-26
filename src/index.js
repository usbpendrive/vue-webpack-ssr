import Vue from 'vue/dist/vue.esm.js';
import Hello from './Hello.vue';

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        components: {
            Hello
        },
        template: "<Hello/>"
    })
});