import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from "../views/Inicio.vue"
import SaibaMais from "../views/SaibaMais.vue"

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      name: 'Inicio',
      component: Inicio,
  },
  {
    path: '/saibamais',
    name: 'SaibaMais',
    component: SaibaMais,
  }
]

const router = new VueRouter({
  routes
})

export default router
