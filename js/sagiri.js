var loadingmore=false;
function showview(url){
	//ajax获取文章内容
	htmlobj=$.ajax({url:url+'?sagiri_pjax',async:false});
  	var view=$(htmlobj.responseText);
  	$('body').append(view);
	$('.view').click(function(e){
		if (e.target === e.currentTarget) {
			hideview();
		}
	})
	$('.view').show();
	$('body').css('overflow','hidden');
	setTimeout(function(){
		$('.view').css('opacity','1');
	},1);
	history.pushState({},"",url);
}
function hideview(){
	$('.view').css('opacity','0');
	setTimeout(function(){
		$('.view').remove();
		$('body').css('overflow','initial');
		},300);
	backTitle();
	history.pushState({},"",siteurl)
}
$(document).ready(function(){
    
	if(window.location.hash.indexOf('#view#')==0){
		setTimeout(function(){
			showview(window.location.hash.substring(6));
		},100);
	}
	$(document).on('scroll',function(){
		if($('html')[0].scrollHeight-($('html')[0].scrollTop+window.innerHeight)==0){
			//滚动到底
			loadnextpage();
		}
	});
})
