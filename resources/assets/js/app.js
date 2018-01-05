require('./bootstrap');

window.Vue = require('vue');

/**
 * Plugins
 */
import store from './vuex'

//
Vue.component('example-component', require('./components/ExampleComponent.vue'));

new Vue({
            store,
            el: '#app'
});
