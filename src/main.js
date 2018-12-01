import Vue from 'vue'
import App from './App.vue'
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

Vue.use(VueCarousel);
