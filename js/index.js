
import Home from "./components/home";
import order from "./components/order";
import Success from "./components/Success";





//全局变量
Vue.prototype.publicUrl = "http://sf-gh.sf-companion.com/zgame/?m=sf_gh" //挂载到Vue实例上面
Vue.prototype.withCredentials = true 





// 2. 定义路由
const routes = [
  { path: '/', redirect:"/home" },  //初始页面重定向为home
  { path: '/home', component: Home.Home },					//01加载
  { path: '/order', component: order.order },					//01加载
  { path: '/Success', component: Success.Success },					//01加载

  
]





// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
const app = new Vue({
  router
}).$mount('#zhaolian')
// 现在，应用已经启动了！