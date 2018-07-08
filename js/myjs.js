$(document).ready(function() {

	/*导航栏选中高亮*/
	$(".nav a").each(function() {
		$this = $(this);
		if($this[0].href == String(window.location)) {
			$this.addClass("liactive");
		}
	});
	/*回到顶部*/
	$("#back-to-top").hide();
	$(window).scroll(function() {
		if($(window).scrollTop() > 200) {
			$("#back-to-top").fadeIn(500);
		} else {
			$("#back-to-top").fadeOut(500);
		}
	});
	$("#back-to-top").click(function() {
		$('body').animate({
			scrollTop: '0'
		}, 500);
	});

	/*悬停切换图片*/
	$("#back-to-top").mouseover(function() {
		$(this).attr("src", "img/backtop2.png");
	});
	$("#back-to-top").mouseout(function() {
		$(this).attr("src", "img/backtop.png");
	});

	/*图片弹出层*/
	$(".showimg").click(function() {
		$("#layer").css("display", "block");
		var path = $(this).attr("src");
		$("#midimg").attr("src", path);
		$("body").css({
			overflow: "hidden"
		});
	});
	$("#close").click(function() {
		$("#layer").css("display", "none");
		$("body").css({
			overflow: "visible"
		});
	});

	/*页面滚动触发动画*/
	jumpanimate();
	$(window).scroll(function() {
		jumpanimate();
	});

	function jumpanimate() {
		$(".aliveimg").each(function() {
			var aliveimgoffset = $(this).offset().top;
			var imgheight = $(this).outerHeight();
			var imgH = imgheight / 2;
			var scrollt = $(window).scrollTop();
			var winH = $(window).height();
			if(aliveimgoffset + imgH > scrollt && aliveimgoffset + imgH < scrollt + winH) {
				$(this).find(".jump-title").addClass("jumptitle")
				$(this).find(".jump-img").addClass("jumpimg");
				$(this).css("visibility", "visible");
			}
		});
	}

});