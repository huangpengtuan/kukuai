/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_order__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Success__ = __webpack_require__(3);









//全局变量
Vue.prototype.publicUrl = "http://sf-gh.sf-companion.com/zgame/?m=sf_gh" //挂载到Vue实例上面
Vue.prototype.withCredentials = true 





// 2. 定义路由
const routes = [
  { path: '/', redirect:"/home" },  //初始页面重定向为home
  { path: '/home', component: __WEBPACK_IMPORTED_MODULE_0__components_home__["a" /* default */].Home },					//01加载
  { path: '/order', component: __WEBPACK_IMPORTED_MODULE_1__components_order__["a" /* default */].order },					//01加载
  { path: '/Success', component: __WEBPACK_IMPORTED_MODULE_2__components_Success__["a" /* default */].Success },					//01加载

  
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 首页
const tempStr = `
<div>
	<div class="Big_BannerBox">
		<div class="swiper-container Big_Banner">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img class="swiper-img" src="img/banner.png" />
				</div>
				<div class="swiper-slide">
					<img class="swiper-img" src="img/banner02.png" />
				</div>
			</div>
			<div class="swiper-pagination Big_Banner-pagination"></div>
		</div>
	</div>

	<div class="userBox">
		<div class="user_Num">
			<img src="img/top_bg_study.png" class="user_Num_BgImg" />
			<div class="user_NumBox">
				<div class="user_NumTxt">15151222</div>
				<div class="user_Numdes">个用户选择</div>
			</div>
		</div>
		<div class="userIocBox">
			<div class="userIocList">
				<img src="img/ioc04.png" class="userIoc_Img" />
				<div class="userIocList_Txt">上门维修</div>
			</div>
			<div class="userIocList">
				<img src="img/ioc02.png" class="userIoc_Img" />
				<div class="userIocList_Txt">寄修包邮</div>
			</div>
			<div class="userIocList">
				<img src="img/ioc03.png" class="userIoc_Img" />
				<div class="userIocList_Txt">品质配件</div>
			</div>
			<div class="userIocList">
				<img src="img/ioc05.png" class="userIoc_Img" />
				<div class="userIocList_Txt">修好付费</div>
			</div>
			<div class="userIocList">
				<img src="img/ioc06.png" class="userIoc_Img" />
				<div class="userIocList_Txt">专业服务</div>
			</div>
			<div class="clearfix"></div>
		</div>
	
	</div>
	
	<div class="container TabBox" id="baojia">
		<div class="row">
			<div class="col-md-12">
				<div class="tab" role="tabpanel">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active">
							<a href="#Section1" aria-controls="home" role="tab" data-toggle="tab"><i class="icon-iphone"></i><span>苹果</span></a>
						</li>
						<li role="presentation">
							<a href="#Section2" aria-controls="profile" role="tab" data-toggle="tab"><i class="icon-san"></i><span>三星</span></a>
						</li>
						<li role="presentation">
							<a href="#Section3" aria-controls="messages" role="tab" data-toggle="tab"><i class="icon-xiaomi"></i><span>小米</span></a>
						</li>
						<li role="presentation">
							<a href="#Section4" aria-controls="messages" role="tab" data-toggle="tab"><i class="icon-huawei"></i><span>华为</span></a>
						</li>
						<li role="presentation">
							<a href="#Section5" aria-controls="messages" role="tab" data-toggle="tab"><i class="icon-meizu"></i><span>魅族</span></a>
						</li>
						<li role="presentation">
							<a href="#Section6" aria-controls="messages" role="tab" data-toggle="tab"><i class="icon-oppo"></i><span>OPPO</span></a>
						</li>
						<li role="presentation">
							<a href="#Section7" aria-controls="messages" role="tab" data-toggle="tab"><i class="icon-vivo"></i><span>vivo</span></a>
						</li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content tabs">
						<div role="tabpanel" class="tab-pane fade in active" id="Section1">
							<div class="faultBox animated lightSpeedIn">
								<div class="faul_TabBox">
									<div class="faul_Tab FTab_Active">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
								</div>
								<div class="faul_dataBox">
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="Section2">
							<div class="faultBox animated lightSpeedIn">
								<div class="faul_TabBox">
									<div class="faul_Tab FTab_Active">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
								</div>
								<div class="faul_dataBox">
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="Section3">
							<div class="faultBox animated lightSpeedIn">
								<div class="faul_TabBox">
									<div class="faul_Tab FTab_Active">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
								</div>
								<div class="faul_dataBox">
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="Section4">
							<div class="faultBox animated lightSpeedIn">
								<div class="faul_TabBox">
									<div class="faul_Tab FTab_Active">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
								</div>
								<div class="faul_dataBox">
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="Section5">
							<div class="faultBox animated lightSpeedIn">
								<div class="faul_TabBox">
									<div class="faul_Tab FTab_Active">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
								</div>
								<div class="faul_dataBox">
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="Section6">
							<div class="faultBox animated lightSpeedIn">
								<div class="faul_TabBox">
									<div class="faul_Tab FTab_Active">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
								</div>
								<div class="faul_dataBox">
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
						<div role="tabpanel" class="tab-pane fade" id="Section7">
							<div class="faultBox animated lightSpeedIn">
								<div class="faul_TabBox">
									<div class="faul_Tab FTab_Active">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
									<div class="faul_Tab">iPhone 6s</div>
								</div>
								<div class="faul_dataBox">
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
									<div class="faul_dataList">
										<div class="faul_name">外屏碎(显示正常)</div>
										<div class="faul_price">
											<p class="faul_reference">¥199.00</p>
											<p class="faul_market">¥297.00</p>
										</div>
										<button class="faul_Btn">立即下单</button>
										<div class="clearfix"></div>
									</div>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="f_name" id="yuyue">预约维修</div>
	<div class="f_container">
		<div class="container">
			<input type="" class="f_List" name="" id="" value="" placeholder="请在上表中选择需要维修的设备" readonly="readonly" />
			<input type="" class="f_List" name="" id="" value="" placeholder="请在上表中确认故障或维修方案" readonly="readonly" />
			<input type="" class="f_List" name="" id="" value="" placeholder="您的名称" />
			<input type="" class="f_List" name="" id="" value="" placeholder="您的手机号" />

			<!--根据维修方式不同，显示规则也不同-->
			<div class="f_List" style="padding: 0;">
				<select name="" class="f_List_In" style="padding: 0 30px 0 15px;">
					<option value="">请选择维修方式</option>
					<option value="">上门维修</option>
					<option value="">到店维修</option>
					<option value="">邮寄维修</option>
				</select>
				<i class="icon-xiala f_List_I01"></i>
			</div>
			<div class="clearfix"></div>

			<!--选择到店维修或邮寄，则显示这个模块，方便别人寄手机或去店里，选择上门维修则不需要显示，只需要用户地址即可-->
			<div class="f_List" style="padding: 0;">
				<select name="" class="f_List_In" style="padding: 0 30px 0 15px;">
					<option value="">请选择维修网点</option>
					<option value="">北京朝阳店</option>
					<option value="">北京海淀店</option>
					<option value="">北京阜成门</option>
				</select>
				<i class="icon-xiala f_List_I01"></i>
			</div>
			<div class="f_List_Txt">
				<div class="f_List_T_addree">地址:北京市海淀区万泉河路68号紫金大厦409室</div>
				<div class="f_List_T_addree">电话:010-82483958</div>
			</div>
			<div class="clearfix"></div>

			<div class="f_List distpicker">
				<input class="f_List_In" id="city-picker3" readonly type="text" value="江苏省/常州市/溧阳市" data-toggle="city-picker" />
				<i class="icon-xiala f_List_I01"></i>
			</div>
			
			<input type="text" class="f_List" placeholder="您所在的具体街道" />

			<div class="submit_box clearfix">
				<div class="term">
					<div class="price_box">￥
						<span class="price_text">179.00</span>
					</div>
					<div id="myModalbtn" class="clearfix">
						<input id="checkbox" type="checkbox" checked="checked">
						<p class="xieyi_box">
							<span>提交订单即同意 </span>
							<span id="xieyi">维修服务协议</span>
						</p>
					</div>
				</div>
				<button id="fixSubmit" class="submitbtn" type="submit">提交订单</button>
			</div>
	
			<div class="clearfix"></div>
		</div>
	</div>
	
	<div class="about" id="about">
		<div class="w3-about-top">
			<h3>酷</h3>
		</div>
		<div class="w3l-about">
			<div class="container">
				<div class="w3ls-heading">
					<h2>关于我们</h2>
				</div>
				<div class="w3ls-about-info">
					<p>Goodcall酷快修是美国顶级维修服务商Bad Apple Inc. 的中国直营公司，公司经过对美国内华达州拉斯维加斯、犹他州盐湖城、亚利桑那州凤凰城等地几十家实体门店长达8年的运行，以其货真价实的维修配件，绝不欺瞒的真诚服务，成熟专业的技术流程，在几千个谷歌消费者评价中长期保持4.8分（满分5分）的超好评。 如今我们有幸来到中国，保持着旨在让您的设备被真正善待地修复的信念，希望用品牌给出承诺，令服务创造信心。</p>
					<div class="w3ls-about-grids">
						<div class="w3ls-about-grid">
							<img src="img/a1.jpg" alt="" />
						</div>
						<div class="w3ls-about-grid">
							<img src="img/a2.jpg" alt="" />
						</div>
						<div class="w3ls-about-grid">
							<img src="img/a3.jpg" alt="" />
						</div>
						<div class="w3ls-about-grid">
							<img src="img/a4.jpg" alt="" />
						</div>
						<div class="clearfix"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<div class="Popup_Box">
		<div class="Popup_continer">
			<img src="img/bg03.PNG" alt="" class="Popup_continer_Bg" />
			<div class="Popup_infoBox">
				<img src="img/close.png" alt="" class="Popup_close" />
				<div class="Popup_txt">账号错误~</div>
				<button class="Popup_Btn">确 定</button>
			</div>
		</div>
	</div>
	
	
	<div id="outInfo">
		<h3 class="tittle-w3"><span>常见</span>问题 </h3>				
		
		<div class="g1 agile-blog1">
			<img src="img/out01.png" alt="blog1">
			<div class="text-w3">
				<h3 class="tittle-w3 sub-head"><span>维修流程</span></h3>
				<p class="para-w3l">
					1.预约下单：下单途径主要有①淘宝商城店铺；②微信小程序；③官网。<br />
					2.选择服务方式：主要方式有①到店维修；②邮寄维修；③上门维修。<br />
					3.检测确认故障：专业人员当面系统性检测，透明公开。<br />
					4.维修：现场维修，规范有序，标准专业。<br />
					5.交付：维修完成后支付。<br />							
				</p>
			</div>
			<div class="clearfix"></div>
		</div>				
		
		<div class="g2 agile-blog2">
			<img src="img/out02.png" alt="blog1">
			<div class="text-w3l">
				<h3 class="tittle-w3 sub-head"><span>官方售前售后QQ群</span></h3>
				<p class="para-w3l">
					酷快修一群 3776030 <br />
					酷快修二群 38360823 <br />
					酷快修三群 746884234<br />
					酷快修四群 24160623<br />
					酷快修五群 38360734<br />
				</p>						
			</div>
			<div class="clearfix"></div>
		</div>				
		
		<div class="g1 agile-blog1">
			<img src="img/out03.png" alt="blog1">
			<div class="text-w3">
				<h3 class="tittle-w3 sub-head"><span>酷快修介绍</span></h3>
				<p class="para-w3l">
					Goodcall酷快修是美国顶级维修服务商Bad Apple Inc. 的中国直营公司，公司经过对美国内华达州拉斯维加斯、犹他州盐湖城、亚利桑那州凤凰城等地几十家实体门店长达8年的运行，以其货真价实的维修配件，绝不欺瞒的真诚服务，成熟专业的技术流程，在几千个谷歌消费者评价中长期保持4.8分（满分5分）的超好评。 如今我们有幸来到中国，保持着旨在让您的设备被真正善待地修复的信念，希望用品牌给出承诺，令服务创造信心。						
				</p>
			</div>
			<div class="clearfix"></div>
		</div>
		
		
	</div>	
	
</div>	
`;

var data = {
	seeNum:1225,		//浏览量
	actiSty:1,			//目前活动的状态 1为征集  2为投票	3为获奖
	withCredentials:true,
};

const Home = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
		this.swiperFn();
		this.cityFn();
		
	},
	methods: {
		init: function() {
			var that = this;

			//获取活动状态
//			$('#spinner').fadeIn()
//			$.ajax({
//				url: that.publicUrl,
//				data: {
//					a: 'get_now_info',
//				},
//				dataType: "json",
//				xhrFields: {
//					withCredentials: that.withCredentials
//				},
//				success: function(result) {
//					console.log(result)
//					$('#spinner').fadeOut()
//					if(result.errorCode == 0) {
//						that.actiSty = result.result.act_info;
//						that.seeNum = result.result.say_nums;
//					} else {
//						alert(result.errorMsg);
//					}
//				}
//			})			
		},
		//banner
		swiperFn:function(){
			var that = this 
		    var swiper01 = new Swiper('.Big_Banner',{
			    pagination: '.Big_Banner-pagination',
		        paginationClickable: true,			
		        grabCursor : true,
		        touchRatio : 0.5,
				autoplay : 4000,
				loop : true,
			}); 
		},	
		//城市初始化
		cityFn:function(){
			var that = this 
		    var $citypicker1 = $('#city-picker1');
		
		    $citypicker1.citypicker();
		
		    var $citypicker2 = $('#city-picker2');
		
		    $citypicker2.citypicker({
		        province: '北京',
		        city: '北京市',
		        district: '海淀区'
		    });
		
		    var $citypicker3 = $('#city-picker3');
		
		    $('#reset').click(function () {
		        $citypicker3.citypicker('reset');
		    });
		
		    $('#destroy').click(function () {
		        $citypicker3.citypicker('destroy');
		    });
		},	
		//时间初始化
		timeFn:function(){
			var that = this 
//	        $('.J-datepicker-day').datePicker({      	
//	           format: 'YYYY-MM-DD HH:mm'
//	        });		
		},	
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},


	}
}

/* harmony default export */ __webpack_exports__["a"] = ({
	Home
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 文艺汇演
const tempStr = `
<div>
	<div class="orderBox">
		<div class="container">
			
		<div class="bs-example" data-example-id="striped-table">
		    <table class="table table-striped table-hover">
		      <thead>
		        <tr>
		          <th>订单类型</th>
		          <th>订单编号</th>
		          <th>维修价格</th>
		          <th>状态</th>
		          <th>操作</th>
		        </tr>
		      </thead>
		      <tbody>
		        <tr>
		          <th scope="row">到店维修</th>
		          <td>1215546623</td>
		          <td>￥25.00</td>
		          <td>已提交</td>
		          <td>
		          	<button class="order_Btn01">取消</button>
		          	<button class="order_Btn02">查看</button>
		          </td>
		        </tr>
		        <tr>
		          <th scope="row">邮寄维修</th>
		          <td>1215546623</td>
		          <td>￥25.00</td>
		          <td>已取消</td>
		          <td>
		          	<button class="order_Btn02">查看</button>
		          </td>
		        </tr>
		        <tr>
		          <th scope="row">上门维修</th>
		          <td>1215546623</td>
		          <td>￥25.00</td>
		          <td>已完成</td>
		          <td>
		          	<button class="order_Btn02">查看</button>
		          </td>
		        </tr>
		      </tbody>
		    </table>
	  	</div>				
			
			
			
			
			
			
		</div>
	</div>
	
</div>
`;

var data = {
		jiemuList:[
			{lingdao:'领导致辞',peopleList:'李主席，宋朱旭',time:'2018-08-09',id:1},
			{lingdao:'领导致辞',peopleList:'李主席，宋朱旭',time:'2018-08-09',id:1}
		],
		OtherUrl:'',
		shuomingTxt:'灰色的以及，丢灰色的以及，丢灰色的以及，丢灰的以及，丢灰色的以及，丢灰色的以及，丢灰色的以及，丢灰色的',
		withCredentials:true,
};

const order = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function() {
			var that = this;



		},
 	
		goOther: function() {
			var that = this 
			window.location.href= that.OtherUrl ;			
		},		
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		
	},
	//过滤器
    filters: {  
        time(value) {
			var date = new Date(parseInt(value) * 1000);
			var Y = date.getFullYear() + '.';
			var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
			var D = date.getDate();
			var h = date.getHours() + ':';
			var m = date.getMinutes();
			//s = date.getSeconds();
			
		    return Y+M+D+' '+h+m;
        }
    },	
	
	
	
	
	
	
}

/* harmony default export */ __webpack_exports__["a"] = ({
	order
});












































/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// 文艺汇演
const tempStr = `
<div class="SuccessBox">
	<div class="Success_continer">
		<div class="Success_Txt01">恭喜您下单成功~</div>
		<div class="Success_Txt02">稍后将有客服联系您哦~，请保持手机畅通！</div>
		<div class="Success_Txt03">
			<button class="Success_T03_Btn01">返回首页</button>
			<button class="Success_T03_Btn02">查看订单</button>
		</div>
		<img src="img/sucess01.png" class="Success_Img"/>
	</div>
</div>
`;

var data = {
		jiemuList:[
			{lingdao:'领导致辞',peopleList:'李主席，宋朱旭',time:'2018-08-09',id:1},
			{lingdao:'领导致辞',peopleList:'李主席，宋朱旭',time:'2018-08-09',id:1}
		],
		OtherUrl:'',
		shuomingTxt:'灰色的以及，丢灰色的以及，丢灰色的以及，丢灰的以及，丢灰色的以及，丢灰色的以及，丢灰色的以及，丢灰色的',
		withCredentials:true,
};

const Success = {
	template: tempStr,
	data: function() {
		return data;
	},
	mounted() {
		this.init();
	},
	methods: {
		init: function() {
			var that = this;



		},
 	
		goOther: function() {
			var that = this 
			window.location.href= that.OtherUrl ;			
		},		
		maskFadeIn: function(a) {
			$(a).fadeIn()
		},
		maskFadeOut: function(a) {
			$(a).fadeOut()
		},
		
	},
	//过滤器
    filters: {  
        time(value) {
			var date = new Date(parseInt(value) * 1000);
			var Y = date.getFullYear() + '.';
			var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
			var D = date.getDate();
			var h = date.getHours() + ':';
			var m = date.getMinutes();
			//s = date.getSeconds();
			
		    return Y+M+D+' '+h+m;
        }
    },	
	
	
	
	
	
	
}

/* harmony default export */ __webpack_exports__["a"] = ({
	Success
});












































/***/ })
/******/ ]);