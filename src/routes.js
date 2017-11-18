import Home from './Components/Home.vue'
import AllServices from './Components/AllContents/AllServices.vue'
import AllSearch from './Components/AllContents/AllSearch.vue'
import Alllearn from './Components/AllContents/Alllearn.vue'
import Register from './Components/Register.vue'
import Login from './Components/Login.vue'
import Single from './Components/AllContents/Single.vue'
import About from './Components/About.vue'

export default [

	{path: "/", component: Home},
	{path: "/AllServices", component: AllServices},
	{path: "/Register", component: Register},
	{path: "/Login", component: Login},
	{path: "/Single", component: Single},
	{path: "/About", component: About},
	{path: "/Alllearn", component: Alllearn},
	{path: "/AllSearch", component: AllSearch},

];