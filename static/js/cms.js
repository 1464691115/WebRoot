
(function ($) {
	window.onload = function () {
		//自适应长宽
		function Resize() {
			var iHBody = window.outerHeight, iWBody = window.outerWidth, ResizeDiv = document
				.getElementById('ResizeDiv');
			ResizeDiv.style.height = iHBody - 52 + 'px';
			ResizeDiv.style.width = iWBody + 'px';
		}
		Resize();
		//当屏幕大小变动事件
		window.onresize = function () {
			Resize();
		};

		// 加载列表
		PageCount(1);
		//给左边导航栏添加点击事件(onclick)
		var listLi = document.getElementById('nav').children;
		for (var i = 0; i < listLi.length; i++) {
			listLi[i].onclick = function () {
				for (var j = 0; j < listLi.length; j++) {
					listLi[j].className = '';
				}
				this.className = 'active';
				var listName = this.innerText;
				document.getElementById("list_title").textContent = listName;
				function selectTable(arr) {
					var tableDom = document.getElementById("tb_title"),
						tableDomHtml = "";
					for (let j = 0; j < arr.length; j++) {
						tableDomHtml += "<th>" + arr[j] + "</th>";
					}
					tableDom.innerHTML = tableDomHtml;
				}
				switch (listName) {
					case "开通Vip":
						selectTable(["开通序列号", "申请时间", "申请人", "价格", "账号", "操作"]);
						PageCount(1);
						break;
					case "申请退款":
						selectTable(["退款序列号", "申请时间", "申请人", "账号", "操作"]);
						break;
					case "用户信息":
						selectTable(["用户id", "手机号", "生日", "会员级别", "操作"]);
						break;
					default:
						break;
				}
			};
		}


		//分页
		function pageList() {
			var prev = document.getElementsByClassName('tablePrev')[0],
				next = document.getElementsByClassName('tableNext')[0],
				page_list = document.getElementById('page_list');
			prev.onclick = function () {
				var current = parseInt(page_list.value);
				if (current != 1) {
					PageCount(current - 1);
					page_list.value = current - 1;
					//传上一页的值过去
				} else {
					alert('到头了');
				}
			};
			next.onclick = function () {
				var current = parseInt(page_list.value);
				if (current != page_list.children.length) {
					PageCount(current + 1);
					page_list.value = current + 1;
				} else {
					alert('后面没了');
				}
			};
		}
		pageList();
		//显示列表
		var back = document.getElementById('back');
		back.onclick = function () {
			PageCount(1);
			document.getElementsByClassName('listVip')[0].className = 'listVip';
			document.getElementsByClassName('vipParticular')[0].className += ' am-hide';
		};
		//分页
		function PageCount(page) {
			ajaxQuery(page);
			var tableDomList = $("#tb_1").children();
			var pageArr = tableDomList.slice((page - 1) * 10, (page * 10)),
				pageZ = Math.ceil(tableDomList.length / 10);
			$("#page_list").html("");
			for (let i = 0; i < tableDomList.length; i++) {
				tableDomList.eq(i).addClass("am-hide");
			}
			for (let i = 0; i < pageArr.length; i++) {
				pageArr.eq(i).removeClass("am-hide");
			}
			for (let i = 0; i < pageZ; i++) {
				$("#page_list").append("<option value=" + (i + 1) + ">" + (i + 1) + "/" + pageZ + "</option>");
			}
			allFunction();
		}
		//操作事件
		function allFunction() {
			//删除按钮
			deletecusz();
			//查询按钮
			Onchakan();
		}
		//主查询
		function ajaxQuery(current1) {
			$.ajax({
				type: 'get',
				url: "QueryCust.action",
				async: false,
				dataType: 'json',
				data: {
					"page": current1
				},
				success: function (data) {
					$("#tb_1").html("");

					for (var i = 0; i < data.length; i++) {
						$("#tb_1")
							.append(
								"<tr><td id='customerid'>"
								+ data[i]['customerid']
								+ "</td><td id='data_time'>"
								+ data[i]['datatime']
								+ "</td><td id='name'>"
								+ data[i]['name']
								+ "</td><td id='money'>"
								+ data[i]['money']
								+ "￥"
								+ "</td><td id='userPhone'>"
								+ data[i]['userPhone']
								+ "</td><td>"
								+ "<button class='vipParticularBtn' >查看</button>"
								+ "<button id='vipDelete' style='margin-left:20px'>删除</button>"
								+ "</td></tr>");
					}

				}


			});
		}


		//删除此审核
		function deletecusz() {

			$('#vipDelete').click(function () {
				var msg = "是否删除？";
				if (confirm(msg) == true) {
					$.ajax({
						type: 'post',
						url: "deletecus.action",
						async: false,
						dataType: 'json',
						data: {
							"customerid": customerid
						},
						success: function (data) {
							if (data > 0) {
								alert('删除成功！');
								location = location;
							} else {
								alert('删除失败');
							}
						}
					});
				}
			});
		}

		//刷新出用户信息
		function chakan(customerid) {
			$.ajax({
				type: 'get',
				url: "UserIdQuery.action",
				async: false,
				dataType: 'json',
				data: {
					"customerid": customerid
				},
				success: function (data) {
					for (var i = 0; i < data.length; i++) {
						$("#ul_1")
							.html(
								"<li>"
								+ "姓名:&nbsp;&nbsp;<span>"
								+ data[i]['name']
								+ "</span></li>"
								+ "<li>"
								+ "性别:&nbsp;&nbsp;<span>"
								+ data[i]['sex']
								+ "</span></li>"
								+ "<li>"
								+ "身份证号:&nbsp;&nbsp;<span>"
								+ data[i]['idnumber']
								+ "</span></li>"
								+ "<li>"
								+ "银行卡号:&nbsp;&nbsp;<span>"
								+ data[i]['banknumber']
								+ "</span></li>"
								+ "<li>"
								+ "芝麻信用分:&nbsp;&nbsp;<span>"
								+ data[i]['sesame']
								+ "</span></li>"
								+ "<li>"
								+ "征信情况:&nbsp;&nbsp;<span>"
								+ data[i]['credit']
								+ "</span></li>"
								+ "<li>"
								+ "是否办过网贷:&nbsp;&nbsp;<span>"
								+ data[i]['isnetloan']
								+ "</span></li>"
								+ "<li>"
								+ "手机号码:&nbsp;&nbsp;<span>"
								+ data[i]['phone']
								+ "</span></li>"
								+ "<li>"
								+ "婚姻:&nbsp;&nbsp;<span>"
								+ data[i]['marriage']
								+ "</span></li>"
								+ "<li>"
								+ "金额:&nbsp;&nbsp;<span><input type='text' id='moneyup' value='" + data[i]['money'] + "'/>"
								+ "</span></li>"
								+ "<li>"
								+ "借款用途:&nbsp;&nbsp;<span>"
								+ data[i]['usageofloan']
								+ "</span></li>"
								+ "<li>"
								+ "<span><button class='' id='shenheTong' value='1' type='button'>审核通过</button></span>&nbsp&nbsp&nbsp"
								+ "<span><button class='' id='shenheJu' value='3' type='button'>审核拒绝</button></span></li>");

					}
				}
			});
			//审核通过
			$("#shenheTong").click(function () {
				var msg = "是否通过？";
				if (confirm(msg) == true) {
					$.ajax({
						type: 'post',
						url: "updateTong.action",
						async: false,
						dataType: 'json',
						data: {
							"customerid": customerid,
							"isTong": $('#shenheTong').val(),
							"money": $('#moneyup').val()
						},
						success: function (data) {
							if (data > 0) {
								alert('审核通过！');
								location.href = 'cms.html'
							} else {
								alert('审核出现了点问题,请检查数据库连接');
							}
						}
					});
				}
			})

			//审核拒绝
			$("#shenheJu").click(function () {
				var msg = "是否拒绝？";
				if (confirm(msg) == true) {
					$.ajax({
						type: 'post',
						url: "updateTong.action",
						async: false,
						dataType: 'json',
						data: {
							"customerid": customerid,
							"isTong": $('#shenheJu').val(),
							"money": $('#moneyup').val()
						},
						success: function (data) {
							if (data > 0) {
								alert('拒绝完成！');
								location.href = 'cms.html'
							} else {
								alert('审核出现了点问题...请检查数据库连接');
							}
						}
					});
				}
			})


		}
		//下拉框
		$("#page_list").change(function () {
			var page_value = this.value;
			PageCount(page_value);
			this.value = page_value;
		});

		//精准查询
		document.getElementById("sousuo").onclick = function () {
			$.ajax({
				type: 'get',
				url: "Moquery.action",
				async: false,
				data: {
					"userphone": $('#Mophone').val(),
				},
				dataType: 'json',
				success: function (data) {
					$("#tb_1").html(" ");
					for (var i = 0; i < data.length; i++) {
						$("#tb_1")
							.append(
								"<tr><td id='customerid'>"
								+ data[i]['customerid']
								+ "</td><td id='data_time'>"
								+ data[i]['datatime']
								+ "</td><td id='name'>"
								+ data[i]['name']
								+ "</td><td id='money'>"
								+ data[i]['money']
								+ "￥"
								+ "</td><td id='userPhone'>"
								+ data[i]['userPhone']
								+ "</td><td>"
								+ "<button class='vipParticularBtn'>查看</button>"
								+ "<button id='vipDelete' style='margin-left:20px'>删除</button>"
								+ "</td></tr>");
					}

				}
			});
		}

		//点击查询详细
		function Onchakan() {
			// 序列号
			var customerid, vipParticular = document
				.getElementsByClassName('vipParticularBtn');
			for (var i = 0; i < vipParticular.length; i++) {
				vipParticular[i].onclick = function () {
					document.getElementsByClassName('listVip')[0].className += ' am-hide';
					document.getElementsByClassName('vipParticular')[0].className = 'vipParticular';
					customerid = this.parentNode.parentNode.children[0].textContent;
					chakan(customerid);
				}

			}
		}
	}



})(jQuery) 