<?php
/**
 * 如果毛玻璃+Material Design...？
 * 
 * @package Sagiri
 * @author Archeb @ iDea Leaper
 * @version 1.0 Alpha
 * @link https://qwq.moe
 */
 
if (!defined('__TYPECHO_ROOT_DIR__')) exit;
if(!isset($_GET['ajax_load'])){
	$this->need('header.php');
}
?>
			<?php while($this->next()): ?>
			<div class="post_item">
				<div class="post_head post_title"><?php $this->title(); ?></div>
				<div class=" post_head post_actions">
					&nbsp;<?php $this->date(); ?><i class="fa fa-clock-o"></i>&nbsp;<?php $this->author(); ?>&nbsp;<img class="user-avatar-small" <?php $this->author->gravatar(64);?> &nbsp;
				</div>
				<div class="post_body">
					<?php if (isset($this->fields->previewImage)): ?>
					<div class="post_image" onclick="showview('<?php $this->permalink() ?>');">
						<div class="post_image_container" style="background-image:url(<?php $this->fields->previewImage(); ?>)"></div>
					</div>
					<?php endif; ?>
					<div class="post_content">
						<?php $this->content(); ?>
					</div>
				</div>
				<div class="post_foot">
					<button class="sagiri_btn" onclick="showview('<?php $this->permalink() ?>');">继续阅读</button>
					<button onclick="likeUp(<?php echo $this->cid; ?>)" class="sagiri_btn" style="background-color:orange">点赞(<span id="like-<?php echo $this->cid; ?>"><?php echo Like_Plugin::theLike(false); ?></span>)</button>
				</div>
			</div>
			<?php endwhile; ?>
				
			<script id="removable_script">
				<?php if($this->_currentPage < ceil($this->getTotal() / $this->parameter->pageSize)) {?>
				function loadnextpage(){
					if(loadingmore==true){
						//防止重复请求
					}else{
						loadingmore=true;
						var Spinner=$('<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>');
						//播放加载中动画
						Spinner.css("display","flex");
						Spinner.appendTo($('.posts'));
						$.ajax({
							url:"<?php echo str_replace("{page}",$this->_currentPage + 1,Typecho_Router::url($this->parameter->type .
	                (false === strpos($this->parameter->type, '_page') ? '_page' : NULL),
	                $this->_pageRow, $this->options->index)) ?>?ajax_load",
							async:true,
							success:function(data){
							var posts=$.parseHTML(data, document, true);
						  	$('.posts').append(posts);
						  	$('#removable_script').remove();
						  	$('.spinner').remove();
							},
							complete:function(){
								$('.spinner').remove();
								loadingmore=false;
							}
						})
					}
				}
				<?php }else{ ?>
				function loadnextpage(){}
				<?php } ?>
			</script>
<?php 
if(!isset($_GET['ajax_load'])){
	$this->need('footer.php');
} 
?>