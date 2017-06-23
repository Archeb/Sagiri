var loadingmore=false;
var lastscroll=0;
function showview(url){
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
	history.pushState({},"",siteurl);
}

function likeUp(cid){
	$.post(likeurl,
		{
			cid:cid
		},
		function(data){
		var zan = $('#like-' + cid).text();
		$('#like-' + cid).text(parseInt(zan) + 1);
		},'json');
}

$(document).ready(function(){
    
	if(window.location.hash.indexOf('#view#')===0){
		setTimeout(function(){
			showview(window.location.hash.substring(6));
		},100);
	}
	$(document).on('scroll',function(){
		
		
		if($('html')[0].scrollHeight-($('html')[0].scrollTop+window.innerHeight)===0 || $('body')[0].scrollHeight-($('body')[0].scrollTop+window.innerHeight)===0){
			loadnextpage();
		}
		//判断向上还是向下拖动
		var nowscroll=$('html')[0].scrollTop;
		if(lastscroll-nowscroll > 0){
			$('musicbar').css('margin-top','0');
			lastscroll=nowscroll;
		}else if(lastscroll-nowscroll < 0){
			$('musicbar').css('margin-top','-60px');
			lastscroll=nowscroll;
		}else if(lastscroll-nowscroll == 0){
			//浏览器兼容问题，有的浏览器认的是body元素
			var nowscroll=$('body')[0].scrollTop;
			if(lastscroll-nowscroll > 0){
				$('musicbar').css('margin-top','0');
				lastscroll=nowscroll;
			}else if(lastscroll-nowscroll < 0){
				$('musicbar').css('margin-top','-60px');
			}
		}
		
	});
})