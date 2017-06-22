<?php if(!isset($_GET['sagiri_pjax'])){
	header("location: " . $this->options->siteUrl . "#view#" . $_SERVER['REQUEST_URI']);
	die();
} ?>
<div class="view">
<script>document.title = '<?php $this->archiveTitle(array(
            'category'  =>  _t('分类 %s 下的文章'),
            'search'    =>  _t('包含关键字 %s 的文章'),
            'tag'       =>  _t('标签 %s 下的文章'),
            'author'    =>  _t('%s 发布的文章')
        ), '', ' - '); ?><?php $this->options->title(); ?>';</script>
			<div class="container view_container">
				<div class="view_toolbar">
					<a href="#" class="view_toolbar_item" onclick="hideview();">
						<i class="fa fa-close fa-3x" aria-hidden="true"></i>
					</a>
					<a href="#" class="view_toolbar_item">
						<i class="fa fa-rss fa-3x" aria-hidden="true"></i>
					</a>
					<a href="#" class="view_toolbar_item">
						<i class="fa fa-comment fa-3x" style="line-height: 0.8;" aria-hidden="true"></i>
					</a>
				</div>
				<div class="view_head" style="<?php if (isset($this->fields->coverImage)): ?>background-image:linear-gradient(transparent, #f5f5f5),url(<?php $this->fields->coverImage() ?>);<?php endif; ?>">
					<h1><?php $this->title() ?></h1>
					<span class="view_meta">Written By <?php $this->author(); ?> on <?php $this->date('F j, Y'); ?></span>
				</div>
				<div class="view_body">
					<?php $this->content(); ?>	
					<?php $this->need('comments.php'); ?>
				</div>
			</div>
		</div>