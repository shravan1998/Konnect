import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Notification from './views/Notifications.vue'
import Messages from './views/Message.vue'
import Details from './views/Details.vue'
 
Vue.use(Router)

const router = new Router(
    {
        mode:"history",
        base:process.env.BASE_URL,
        routes:[
            {
                path:"/",
                name:"root",
                component:Login
            }
            ,
            {
                path:"/login",
                name:"login",
                component:Login
            },
           {
                path:"/register",
                name:"register",
                component:Register
            },
            {
                path:"/home",
                name:"home",
                component:Home
            },
            {
                path:"/profile",
                name:"profile",
                component:Profile
            },
            {
                path:"/notification",
                name:"notification",
                component:Notification
            },
            {
                path:"/messages",
                name:"messages",
                component:Messages
            },
            {
                path:"/details/:email",
                name:"details",
                component:Details
            },
            {path:'*',redirect:'/'}
        ]
    }
)

export default router