$(document).ready(function () {
 	loginFn.init();
 
 
 
    var countdown=60;
    function settime(val) {
        if (countdown == 0) {
            val.removeAttribute("disabled");
            val.value="免费获取验证码";
            countdown = 60;
        } else {
            val.setAttribute("disabled", true);
            val.value="重新发送(" + countdown + ")";
            countdown--;
            setTimeout(function() {
                settime(val)
            },1000)
        }
 
    }
 
 
 
});

var loginFn = {
	//初始化
	init:function(){
		var that = this;
		that.publicUrl = ' https://api.quick-fix.cn/mobile/';
		that.withCredentials = true ;
		that.loginSty = 0 ;		//0未注册  1登陆   3找回密码   
		that.countdown = 60 ;
		that.daojishiFn = function(){};
		
		that.PopupOnOff()
		that.TimeClickFn()
		that.checkUpFn()     //检查状态
		that.GetImgCodeFn()
		
		
	},
	//检查登陆状态
	checkUpFn:function(){
		var that = this 
		$('.loginBox').hide()
		$('.loginBox').eq(that.loginSty).show()
	},	
	//关闭弹窗
	PopupOnOff:function(){
		var that = this 
		$('.Popup_close').click(function(){
			$('.Popup_Box').fadeOut()
		})
		$('.Popup_Btn').click(function(){
			$('.Popup_Box').fadeOut()
		})		
	},
	//倒计时
	TimeClickFn:function(){
		var that = this 
		$('.get_Code').each(function(i){
			$(this).click(function(){
				that.GetCodeFn()

			})
		})
	},	
	//获取图形验证码
	GetImgCodeFn:function(){
		var that = this 
		$('.get_Code_Img').click(function(){
			$.ajax({
				url: that.publicUrl + 'other/captcha',
				data: {},
				dataType: "json",
				xhrFields: {
					withCredentials: that.withCredentials
				},
				success: function(result) {
					console.log(result)
					if(result.errorCode == 0) {
						
						
					} else {
						alert(result.errorMsg);
					}
				}
			})				
		})

	},	
	//获取验证码
	GetCodeFn:function(){
		var that = this 
        if (that.countdown == 0) {
            $('.get_Code').attr("disabled");
            $('.get_Code').html("获取验证码");
            that.countdown = 60;
        } else {
            $('.get_Code').attr("disabled",true);
            $('.get_Code').html("重新发送(" + that.countdown + ")");        	
            that.countdown--;
            that.daojishiFn = setTimeout(function() {
                that.GetCodeFn()
            },1000)
        }
	},	
	
	
}
