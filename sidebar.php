<div class="sidebar">
	<img class="sidebar_icon" src="https://secure.gravatar.com/avatar/93f5d0e297fe1c30eb4cf540e214523a?s=256"/>
	<h2><?php $this->options->title(); ?></h2>
	<p><?php $this->options->description(); ?></p>
	<input placeholder="搜索" class="sidebar_search" />
	<a href="<?php $this->options->siteUrl(); ?>" class="sidebar_item">Index</a>
	<?php $this->widget('Widget_Contents_Page_List')->to($pages); ?>
    <?php while($pages->next()): ?>
	<a onclick="showview('<?php $pages->permalink(); ?>');" class="sidebar_item"><?php $pages->title(); ?></a>
	<?php endwhile; ?>
	<div class="sidebar_meta">
		<p><a href="https://qwq.moe/">Theme Sagiri Made By Archeb</a></p>
		<p>Archeb's Blog © 2014 - 2017</p>
	</div>
</div>
