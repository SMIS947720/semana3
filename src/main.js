import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  el: '#aplicacion',
  data:{ 
    actividad: '',
    actividades: []
  },
  methods: {
    actualizarLista: function() {
      this.actividades.push(this.actividad);
      this.actividad = '';
    }
  }
})