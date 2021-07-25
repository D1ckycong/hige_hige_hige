$(".openbtn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".nav_header").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
		$(".btn-contact").removeClass('btn_contact')
});

$(".nav-header a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn").removeClass('active');//ボタンの activeクラスを除去し
    $(".nav_header").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
		$(".btn-contact").toggleClass('btn_contact')
});
