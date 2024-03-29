import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Project from "./components/project.vue";
import About from "./components/about.vue";
import Home from "./components/Home.vue";
import Playground from "./components/Playground.vue";

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
	{
		path: '/:identifier', 
		name: 'Projects', 
		component: Project,
		props: true
	},
	{
		path: '/', 
		name: 'Home', 
		component: Home,
	},
	{
		path: '/About', 
		name: 'About', 
		component: About,
	},
	{
		path: '/Playground', 
		name: 'Playground', 
		component: Playground,
	},
	{ 
		path: "*",
		component: Home,
	}
]
const router = new VueRouter({routes})

new Vue({
	router,
  	render: h => h(App),
}).$mount('#app')
