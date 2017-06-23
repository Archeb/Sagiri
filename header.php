
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<title><?php $this->options->title(); ?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
	    <?php $this->header(); ?>
	</head>
	<script>
	function backTitle(){
		document.title = '<?php $this->options->title(); ?>';
	}
	backTitle();
	var siteurl='<?php $this->options->siteUrl(); ?>';
	var likeurl='<?php Helper::options()->index('/action/like?up'); ?>';
	</script>
	<body>
		<background></background>
		
		<navbar>
			<div class="FrostedGlass"></div>
			<div class="container barlist">
				<div class="barlist_group barlist_left">
					<a href="<?php $this->options->siteUrl(); ?>" class="barlist_item">Index</a>
					<?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
                    <?php while($pages->next()): ?>
					<a onclick="showview('<?php $pages->permalink(); ?>');" class="barlist_item"><?php $pages->title(); ?></a>
					<?php endwhile; ?>
				</div>
				<!--
					这部分的样式我写了但是我不打算用 如果的确有需要可以自己打开用
					<div class="barlist_group barlist_right">
					<div class="barlist_item">Put whatever you want</div>
				</div>-->
			</div>
		</navbar>
		<div class="container posts">