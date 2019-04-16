(function ($) {
    $(document).ready(function () {
        function userSta() {
            this.userLogin = sessionStorage.username;
        }
        userSta.prototype = {
            usPd: function () {
                if (this.userLogin != undefined) {
                    //有这个用户名
                    // alert(this.userLogin);
                } else {
                    alert("登录后即可查看精彩文章。");
                    location.href = "user.html";
                }
            }
        }
        var userL = new userSta();
        userL.usPd();
        //举报
        document.getElementById("report").onclick = function () {
            location.href = "http://www.12315.cn/";
            //他这想要存进数据里面你再给整个表
            $.ajax();
        }
        function tuijianList() {
            var arry1 =
                "急用钱请找我，无抵押，无担保。】最新口子， 大家速度撸起来， 无视黑白， 有身份证就能贷】海创汇 新口子来了 芝麻分550以上 实名手机三个月以上就可以撸】0 门槛！ 注册就有万元额度！ 3 分钟极速放款！ 速度上人！】原现金巴士回归放款， 无需芝麻分， 双黑可做】三步认证等结果就行了！ 要求低审核快通过率高！ 吃肉速度要跟上！】芝麻分550分以上， 本人实名手机号加本人实名淘宝， 就是说手机号加淘宝收货地址是你的常住地址基本就稳下】乐乐花！ 超低门槛！ 实名制手机号正常使用6个月以上！ 系统自动审核！】节节花芝麻分小额短期口子, 最高下款6000申请入口审核条件】手机号实名， 支付宝有花呗， 额度1500 - 10000！】芝麻分550只要没负面， 稳如发工资美滋滋！】不看负债， 人人放款1000起步， 最高5000， 无视征信！ 】依旧火爆的并且适合中介操作的两个卡种 】小花椒： 不查不上征信， 芝麻分口子， 最高可撸5000元！】无需芝麻分， 最高竟然可以申请20万， 老铁们】只要手机实名半年以上就能贷， 不上征信， 不要芝麻分！】节后恢复放款， 玖富10次贷， 人人15000！】30 分钟内放款， 最高5000， 不查征信不上征信！            】有芝麻分就可贷走1200至5000元， 稳如深夜工资！】有手机就能贷， 不查征信不上征信， 秒过秒到！            】中信大放水， 30 % 起提额妥妥， 捡漏的速度跟上！】无副作用， 立竿见影， 秒过秒到， 可撸1500！            】每日放款3000万！ 大额口子有车的， 有信用卡的……            】国庆福利， 国庆放假期间也放款的口子汇总， 老铁赶紧】最新无视黑白口子， 认证简单， 秒批， 秒到账500 - 3000 元            】国庆节口子放水不上征信！ 无视黑户一张身份证批3000额度】最高5000， 18 - 40 周岁， 有手机的就来领钱!】只要你有花呗就能拿钱， 不管你有多黑， 只要支付宝不黑就好！ ",
                arry2 =
                    "手机回收类口子，老哥们的最爱，只要芝麻分不低于570人人8000】热炒包提到账黑科技破解 最高下款30000申请入口审核条件介绍】    审核速度快，下载APP到放款到账全程2小时】    近期下款新口子，没做过的老哥，看这里】    有信用卡哪个网贷好下？这8个口子有信用卡必下！】    交通信用卡使用半年以上良好的，贷款、提额随意】    老口新发，无需芝麻分，老铁赶紧过来拿钱】    独家通道秒批工资，专治万年拒，老铁们赶紧过来了】    百分百下款的网贷口子大盘点！】    三款不错的口子，门槛低，想要贷款老哥千万不要错过】    无视负债的10种网贷！这些口子门槛低到你无法想象！】信用卡花呗自动回款码，大额4999可一笔过，六九金服】不查征信！不要花呗！纯机审神口来袭，芝麻分500可撸!",
                arry3 =
                    "国庆节口子放水不上征信！无视黑户一张身份证批3000额度】大白钱包，新口子，秒速放款，无逾期最高2w】无视一切的悟空招财，人人1000元，再不下手小心过时】高下款率信用卡口子，备胎信用，最高20000元】黑科技来袭，秒提工行额度！从1万到30万】彗星钱包：芝麻分590以上，下款很不错哦，经过实测已成】交通Y-Power信用卡又添新丁！】无逾期，秒到秒过，最高可达十万】兴业旗下老口子，最高可申请50000元，征信不错的老哥】pos机知识】全世界收农行信用卡，秒提固定额度】独家神卡偷渡渠道，秒批额度三万起步，大多5万】建行发卡15周年福利最高1500红包100%中奖",
                arry4 =
                    "2018年10月能下款的网贷口子66666】审核飞快秒通过，黑户必选口子！领工资要抓紧！】审核通过没回访就放款，没有芝麻分也可以申请！】0门槛！注册就有万元额度！3分钟极速放款！速度上人！】原现金巴士回归放款，无需芝麻分，双黑可做】不查不上征信，随机电话回访，最高8000】节节花芝麻分小额短期口子,最高下款6000申请入口审核条件】芝麻分550就可以秒下的贷款新网贷口子】晚上申请能下款的小贷口子 这5个有简单资料就能申请！】芝麻分只要580以上，手机号实名，支付宝有花呗就来!";

            function splitList(arry, num) {
                var c = "";
                for (var i = 0; i < arry.length; i++) {
                    c += "<li data-name=" +
                        (i + 1) +
                        "><a href='#'><div class='text'><h1>" +
                        arry[i] +
                        "</h1><p>6小时前 | 75206人在看</p></div></a></li>"
                }
                document.getElementsByClassName('conTab')[num - 1].innerHTML = c;
            }
            splitList(arry1.split('】'), 1);
            splitList(arry2.split('】'), 2);
            splitList(arry3.split('】'), 3);
            splitList(arry4.split('】'), 4);
        }
        tuijianList();
        $('.userImg>.am-figure').removeClass(
            'am-figure-zoomable');
        $('.conTab li,#appendTolist li,.kp-list .btn')
            .click(
                function () {
                    //判断是否为会员
                    var Vip = false,
                        id = $(
                            this).attr(
                                "data-name");
                    if (Vip) {
                        location.href = "tuijian-specific.html?listId=" +
                            id;
                    } else {
                        alert("开通会员后可查看");
                        $('.pay').addClass(
                            'posTop');
                        $('.back').removeClass(
                            'am-hide');
                    }
                })
        //vip付款页面
        //点击开通 VIP 事件
        $('.am-icon-vimeo').click(function () {
            $('.pay').addClass('posTop');
            $('.back').removeClass('am-hide');
        })
        $('.payReturn').click(function () {
            $('.pay').removeClass('posTop');
            $('.back').addClass('am-hide');
        })
        $('.pay_true')
            .click(
                function () {
                    //套餐选择 1为 499 2为 998 3为 1888
                    var money = $(
                        '.pay_list .active')
                        .attr('name');
                    window.location.href = 'pay.html?money=' +
                        money;
                })
        $('.pay_false').click(function () {
            $('.pay').removeClass('posTop');
            $('.back').addClass('am-hide');
        })
        // 点击价格选项 事件
        $('.pay_list li').click(function () {
            $('.pay_list li').removeClass('active');
            $(this).addClass('active');
        })
        $('.nav>li')
            .click(
                function () {

                    //底部导航栏
                    $('.nav>li').removeClass(
                        'active');
                    $(this).addClass('active');
                    var dataName = $(this)
                        .children()
                        .attr('data-name'),
                        title = document
                            .getElementsByClassName('index-title')[0];
                    $('.content>.content-z')
                        .addClass('am-hide');
                    if (dataName == "user") {
                        var userLogin = userL.userLogin;
                        // 判断是否登录 
                        if (userLogin != undefined) {
                            ajaxQuery();
                            // 已登录显示个人中心
                            $(
                                '.swiper-container')
                                .addClass(
                                    'am-hide');
                            $('#' + dataName)
                                .removeClass(
                                    'am-hide');
                            $('.bottom-weizhi')
                                .addClass(
                                    'am-hide');
                            document
                                .getElementsByClassName("userName")[0].innerText = userLogin;
                            title.text = "个人中心";

                        } else {
                            // 跳转登录页面
                            alert('请先登录');
                            window.location.href = 'user.html';
                        }

                    } else {
                        $('.swiper-container').removeClass('am-hide');
                        $('#' + dataName)
                            .removeClass(
                                'am-hide');
                        $('.bottom-weizhi')
                            .removeClass(
                                'am-hide');
                        switch (dataName) {
                            case "tuijian":
                                title.innerText = "首页";
                                break;
                            case "wangdai":
                                title.innerText = "网贷中心";
                                break;
                            case "shenqing":
                                title.innerText = "信用卡";
                                break;
                            default:
                                alert("错误信息，刷新或者联系客服人员")
                                break;
                        }
                    }
                })
        //最上面的轮播图
        var mySwiper1 = new Swiper(
            '.swiper-container1', {
                // direction: 'standard', // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay: {
                    stopOnLastSlide: true,
                }
            });
        //卡片类型的轮播图
        var mySwiper2 = new Swiper(
            '.swiper-container2', {
                loop: false,
            })
        $('#cont-tabs').sticky({
            top: 0
        });
        $('.xyk-hide-btn').click(function () {
            $('.xyk-list-hide').toggle();
            if ($('.xyk-list-hide').is(":hidden")) {
                $(this).text('   展开');
                this.className = "am-icon-chevron-down xyk-hide-btn";
            } else {
                $(this).text('   收起');
                this.className = "am-icon-chevron-up xyk-hide-btn";
            }
        })
        //申请资料
        document.getElementById("sqzl_1").onclick = function () {
            var isFalse = document.getElementById("sqzl_1").value;
            if (isFalse == 1) {
                alert('您已经成功通过了审批,请勿重复提交！');
            } else if (isFalse == 2) {
                alert('正在审核中,请勿重复提交！');
            } else if (isFalse == 0 || isFalse == 3) {
                location.href = "particulars.html";
            }
        }
        document.getElementsByClassName("am-icon-power-off")[0].onclick = function () {
            sessionStorage.removeItem("username");
            alert(sessionStorage.username);
        };
        //主查询
        function ajaxQuery() {
            var username = userL.userLogin;
            $
                .ajax({
                    type: 'get',
                    url: "userphoneQuery.action",
                    async: false,
                    dataType: 'json',
                    data: {
                        "userphone": username
                    },
                    success: function (data) {
                        if (data[0]['isTong'] == 1) {
                            $("#sqzl")
                                .append(
                                    "<li style='padding:10px 50px;color:#fc6da2';>" +
                                    "恭喜！认证已通过，额度：<span id='eDu'>" +
                                    data[0]['money'] + "￥" +
                                    "</span></li>");
                            var istong = data[0]['isTong'];
                            $("#sqzl_1").val(istong);
                            //isFalse(istong);
                        }
                        if (data[0]['isTong'] == 2) {
                            $("#sqzl")
                                .append(
                                    "<li style='padding:10px 50px;color:#fc6da2;'>正在审核中,请稍后查看</li>");

                            var istong = data[0]['isTong'];
                            $("#sqzl_1").val(istong);
                        }
                        if (data[0]['isTong'] == 3) {
                            $("#sqzl")
                                .append(
                                    "<li style='padding:10px 50px;color:#fc6da2';>" +
                                    "很遗憾,您没有申请成功,请重新填写资料</li>");
                            var istong = data[0]['isTong'];
                            $("#sqzl_1").val(istong);
                        }
                    }
                });
        }
    })

})(jQuery)