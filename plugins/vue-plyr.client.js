// plugins/vue-plyr.js
//import Vue from 'vue';
import { defineNuxtPlugin } from '#app';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client){
        nuxtApp.vueApp.use(VuePlyr);
    }
    
});