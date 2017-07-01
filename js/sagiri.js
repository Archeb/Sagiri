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
	});
})

var ap = new APlayer({
    element: document.getElementById('aplayer'),                       // Optional, player element
    narrow: false,                                                     // Optional, narrow style
    autoplay: true,                                                    // Optional, autoplay song(s), not supported by mobile browsers
    showlrc: 0,                                                        // Optional, show lrc, can be 0, 1, 2, see: ###With lrc
    mutex: true,                                                       // Optional, pause other players when this player playing
    theme: '#FFFFFF',                                                  // Optional, theme color, default: #b7daff
    mode: 'random',                                                    // Optional, play mode, can be `random` `single` `circulation`(loop) `order`(no loop), default: `circulation`
    preload: 'metadata',                                               // Optional, the way to load music, can be 'none' 'metadata' 'auto', default: 'auto'
    listmaxheight: '513px',                                             // Optional, max height of play list
    music: [
            {
                title: 'secret base~君がくれたもの~',
                author: '茅野愛衣',
                url: 'http://devtest.qiniudn.com/secret base~.mp3',
                pic: 'http://devtest.qiniudn.com/secret base~.jpg',
                lrc: 'secret base~君がくれたもの~.lrc'
            },
            {
                title: '回レ！雪月花',
                author: '小倉唯',
                url: 'http://devtest.qiniudn.com/回レ！雪月花.mp3',
                pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg',
                lrc: '回レ！雪月花.lrc'
            }
        ]
});
$('.aplayer-list').addClass('aplayer-list-hide');
