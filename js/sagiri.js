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

$('.sidebar_show_btn').on('click',function(){
	if($('.sidebar').css('margin')==='0px'){
		$('.sidebar').css('margin',false);
		$('musicbar').css('margin-left',false);
		$('body').css('width',false);
		$('body').css('overflow',false);
		$('body').css('margin-left',false);
	}else{
		$('.sidebar').css('margin','0');
		$('musicbar').css('margin-left','310px');
		$('body').css('width','100%');
		$('body').css('overflow','hidden');
		$('body').css('margin-left','310px');
	}
})


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
    element: document.getElementById('aplayer'),
    narrow: false,
    autoplay: true,
    showlrc: 0,
    mutex: true,
    theme: '#FFFFFF',
    mode: 'order',
    preload: 'metadata',
    listmaxheight: '513px',
    music: [
    		{
                title: 'Dylan.F - 卡农',
                author: 'Dylan.F',
                url: 'https://api.imjad.cn/cloudmusic/?type=song&id=478507889&br=128000&raw=1',
                pic: 'https://p1.music.126.net/-ShCoe12zt2C2mPQgaq0ZQ==/109951162915837220.jpg'
            },
            {
                title: '【洛天依 / 言和】有点甜',
                author: 'A路人',
                url: 'https://o2hr9ra03.qnssl.com/BilibiliJJ.COM-%E3%80%90%E6%B4%9B%E5%A4%A9%E4%BE%9D%E8%A8%80%E5%92%8C%E3%80%91%E6%9C%89%E7%82%B9%E7%94%9C_%28Av4624739,P1%29.mp3',
                pic: 'https://i2.hdslb.com/bfs/archive/830a606dd6e7be86498592cac7e0329c5638e892.jpg@320w_200h.webp'
            },
            {
                title: '恋爱サーキュレーション',
                author: '花澤香菜',
                url: 'https://api.imjad.cn/cloudmusic/?type=song&id=579954&br=128000&raw=1',
                pic: 'https://p1.music.126.net/hWrYLdhzF4waj4WL1dFPmg==/642114790633458.jpg'
            },
            {
                title: '回レ！雪月花',
                author: '原田ひとみ / 茅野愛衣 / 小倉唯',
                url: 'https://api.imjad.cn/cloudmusic/?type=song&id=28018274&br=128000&raw=1',
                pic: 'https://p1.music.126.net/UrbsnGXM8_cc3nLd3Ru3zw==/18541064580889962.jpg'
            },
        ]
});
$('.aplayer-list').addClass('aplayer-list-hide');