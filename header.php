
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
	<?php $this->need('sidebar.php'); ?>
	<body>
		<background></background>
		
		<musicbar>
			<div class="barlist">
				<div class="barlist_group barlist_left">
					<div class="sidebar_show_btn"><i class="fa fa-bars" aria-hidden="true"></i></div>
					<div id="aplayer" class="aplayer"></div>
				</div>
			</div>
		</musicbar>
		
		
		
		<div class="container posts">