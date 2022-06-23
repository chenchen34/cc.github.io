var english = [
    // "Sign in",
    "Integrated business solution for growth and Realization of overseas mobile applications",
    "Global cash flow platform provides you with global cash flow solutions.",
    " At present, it has helped many apps around the world to provide rapid growth channels.",
    "Our strengths",
    "Stable and efficient application growth channel",
    "Increase revenue",
    "Give full play to the technical advantages, realize the maximization of application cash income, and accelerate the application growth.",
    "Service transparency",
    "Rich and accurate data display, to provide you with transparent advertising services.",
    "Stable and efficient",
    "Powerful advertisement server and local integrated SSP make advertisement request precise and efficient.",
    "Rich forms of advertising",
    "Attract users in the most friendly way and improve the advertising experience",
    "OPEN ADS",
    "INTERSTITIAL",
    "BANNER",
    "NATIVE",
    "When the app opens, it displays a full-screen AD",
    "Half screen or full screen pop-up ads",
    "In the form of a banner",
    "The form of advertising is integrated into the app, Focus on user experience",
    "Global cash flow solutions",
    "The leading global mobile advertising platform, technology-driven, develops full-stack programmatic advertising products and services to monetize user acquisition traffic and provide creative solutions for mobile app publishers worldwide.",
    "Contact us",
    "Name",
    "Company",
    "Email",
    "Country",
    "Content",
    "I have read and agree",
    "Yieldzone privacy policy",
    "Submit",
    "Submission successful, staff will contact you later!"
];
var chinese = [
    // "登录",
    "海外移动应用增长和变现的一体化商业解决方案",
    "全球化流量变现平台，为您提供全球化的变现解决方案",
    "目前已帮助全球多个app提供飞速增长的渠道",
    "我们的优势",
    "稳定而高效的应用增长渠道",
    "提高收益",
    "充分发挥技术优势，实现应用变现收益最大化，加速应用成长。",
    "服务透明",
    "丰富而精准的数据展示，给您提供透明的广告服务。",
    "稳定高效",
    "强大的广告服务器和本地集成的SSP，广告请求精准而高效。",
    "丰富的广告形式",
    "以最友好的方式吸引用户，提升广告体验",
    "开屏广告",
    "插页广告",
    "BANNER",
    "原生广告",
    "应用开启时展现全屏的广告形式",
    "半屏或全屏的弹窗类广告",
    "以横幅的形式展现",
    "广告的形式融入到应用中，注重用户体验",
    "全球化变现解决方案",
    "领先的全球化移动广告平台，以技术为驱动，发展全栈式程序化广告产品和服务，为全球范围内移动应用发行商提供用户获取、流量变现和创意解决方案。",
    "联系我们",
    "姓名",
    "公司名称",
    "联系邮箱",
    "国家",
    "内容",
    "我已阅读并同意",
    "YieldZone隐私政策",
    "提交",
    "提交成功，工作人员将稍后联系您！"
];
var index = {
    initPage: function () {
        var self = this;
        self.initBtn(self);
    },
    initBtn: function (self) {
        $(".content").find(".children").each(function (i, item) {
            var pag_val = $.trim($(item).text());
            chinese.push(pag_val);
        });
        $("#language-btn").click(function () {

            if ($.trim($(this).text()) == "中文") {
                $(this).text("English")
                localStorage.setItem('language', 'English')
                $("#copyright").css({'display':'block'})
                $(".content").find(".children").each(function (i, item) {
                    $(item).text(chinese[i]);
                });
            } else {
                $(this).text("中文");
                localStorage.setItem('language', '中文')
                $("#copyright").css({'display':'none'})
                $(".content").find(".children").each(function (i, item) {
                    $(item).text(english[i]);
                });
            }
        })
    }
};

var opinion = function () {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        // alert('移动端')

    } else {
        // alert('pc端')
    }

}

var resize = function(){
    $(window).resize(function(){
        calculationHeight()
        scroll()
    })
}

var calculationHeight = function(){
    const height = $(window).height()  
        if(height - 60 > 600){
            $('.top-bg-content').css({'height': height - 60 + 'px'})
            $('.content-item').css({'min-height': height - 60 + 'px'})
        }else{
            $('.top-bg-content').css({'height': '550px'})
            $('.content-item').css({'min-height': '600px'})
        }
}

var scroll = function(){
    
    var eleTop = $('.ad-img').eq(0).offset().top;
    var height =$('.ad-img').eq(0).height()
    var eleTop2 = $('.advertiser-item').eq(0).offset().top;
    var height2 =$('.advertiser-item').eq(0).height()
    var parentWidth = $('#right-content').width()
    $(window).scroll(function(){
        var winPos = $(window).scrollTop();
        if(winPos + height>=eleTop){
            $('.ad-img').each(function(){
                $(this).addClass('img-center')
            })
        }

        if(winPos + height2>=eleTop2){
            let width = (parentWidth/2) + 250;
           $('.advertiser-item').each(function(){
                $(this).find('img').css({'transform': 'translateX(-'+ width +'px)'})
            })
        }
    })
}

var adClickChangeImg = function(){
    $('#item-parent div').on('mouseenter',function(){
        $('#item-parent div').removeClass('ad-selected')
        $('#right-tip div').addClass('disppper')
        $(this).addClass('ad-selected')
        const index = $(this).index() + 1
        $('#ad-img-wrap').removeClass('ad-1-img ad-2-img ad-3-img ad-4-img')
        $('#ad-img-wrap').addClass('ad-'+ index +'-img')
        $('#right-tip div').eq(index-1).removeClass('disppper')
    })
}


$(function () {
    scroll()
    calculationHeight()
    resize()
    btnClick()
    adClickChangeImg()
    const language = localStorage.getItem('language') ? localStorage.getItem('language') : 'English'
    $('#language-btn').text(language)
    console.log(localStorage.getItem('language'))
    index.initPage();
    if ($('#language-btn').text() == "中文") {
        $(".content").find(".children").each(function (i, item) {
            $(item).text(english[i]);
        });
        $("#copyright").css({'display':'none'})
    } else {
        $(".content").find(".children").each(function (i, item) {
            $(item).text(chinese[i]);
        });
        $("#copyright").css({'display':'block'})
    }
})

var submit = function(name,company,email,country,content){
    $.ajax({
        url:"/v1/contact-us/create",
        type:"post",
        data:{
            realname: name,
            companyName: company,
            email: email,
            country: country,
            content: content,
            agree: 1
        },
        success:function(result){
          if(result.status == 1){
            $('#global-tip').css({'display':'block'})
            resetData()
            setInterval(() => {
                $('#global-tip').css({'display':'none'})
            }, 3000);
          }else{
              
          }
        },
        error:function(){
            alert('Unknown Error!!')
        }
   });
}

var resetData = function(){
        $('#nameText').val('')
        $('#companyText').val('')
        $('#emailText').val('')
        $('#countryText').val('')
        $('#contentTextarea').val('')
        $("#agreeCheckbox").prop("checked",false)
}

var btnClick = function(){
    $('#submit').on('click',function(){
        const name = $('#nameText').val()
        const company = $('#companyText').val()
        const email = $('#emailText').val()
        const country = $('#countryText').val()
        const content = $('#contentTextarea').val()
        const agree = $("input[name='agree']:checked").length
        let errorNumber = 0
        const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if(!name){
            $('#nameText').addClass('error-tip') 
            errorNumber++
        }else{
            $('#nameText').removeClass('error-tip') 
        }

        if(!company){
            $('#companyText').addClass('error-tip') 
            errorNumber++
        }else{
            $('#companyText').removeClass('error-tip') 
        }

        if(!email || (email&&!emailPattern.test(email))){
            $('#emailText').addClass('error-tip') 
            errorNumber++
        }else{
            $('#emailText').removeClass('error-tip') 
        }

        if(!country){
            $('#countryText').addClass('error-tip') 
            errorNumber++
        }else{
            $('#countryText').removeClass('error-tip') 
        }

        if(!content){
            $('#contentTextarea').addClass('error-tip') 
            errorNumber++
        }else{
            $('#contentTextarea').removeClass('error-tip') 
        }

        if(agree == 0){
            $('#agreeCheckboxLabel').addClass('error-tip') 
            errorNumber++
        }else{
            $('#agreeCheckboxLabel').removeClass('error-tip') 
        }

        if(errorNumber>0){
            return
        }

        submit(name,company,email,country,content)
    })
}