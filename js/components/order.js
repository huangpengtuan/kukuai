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

export default {
	order
};










































