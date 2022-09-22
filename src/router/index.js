import { createRouter, createWebHisory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/movie-preview/:id',
        name: 'moviePreview',
        component: () => import('@/views/MoviePreview'),
        props
    }
]