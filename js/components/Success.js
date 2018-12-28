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

export default {
	Success
};










































