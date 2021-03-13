import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from "../views/Inicio.vue"
import PontosColeta from "../views/PontosColeta.vue"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
        path: '/pontosdeColeta',
        name: 'Pontos de Coleta',
        component: PontosColeta,

    }
]

const router = new VueRouter({
    routes
})

export default router