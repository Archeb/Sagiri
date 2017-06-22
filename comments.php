<?php if (!defined('__TYPECHO_ROOT_DIR__')) exit; ?>
<div id="comments">
    <?php $this->comments()->to($comments); ?>
    <?php if ($comments->have()): ?>
	<h3><?php $this->commentsNum(_t('暂无评论'), _t('仅有一条评论'), _t('已有 %d 条评论')); ?></h3>
    
    <?php $comments->listComments(); ?>

    <?php $comments->pageNav('&laquo; 前一页', '后一页 &raquo;'); ?>
    <?php else: ?>
    	<h3><?php echo _t('暂无评论'); ?></h3>
    <?php endif; ?>

    <?php if($this->allow('comment')): ?>
    <div id="<?php $this->respondId(); ?>" class="respond">
        <div class="cancel-comment-reply">
        <?php $comments->cancelReply(); ?>
        </div>
    
    	<form method="post" action="<?php echo $this->permalink."comment?_=".$this->security->getToken(str_replace('?sagiri_pjax','',$this->request->getRequestUrl())) ?>" id="comment-form" role="form">
            <?php if($this->user->hasLogin()): ?>
    		<p><?php _e('登录身份: '); ?><a href="<?php $this->options->profileUrl(); ?>"><?php $this->user->screenName(); ?></a>. <a href="<?php $this->options->logoutUrl(); ?>" title="Logout"><?php _e('退出'); ?> &raquo;</a></p>
            <?php else: ?>
            	<div class="comment-info">
		    			<input placeholder="<?php _e('称呼'); ?>" type="text" name="author" id="author" class="text" value="<?php $this->remember('author'); ?>" required />
		    			<input placeholder="<?php _e('Email'); ?>" type="email" name="mail" id="mail" class="text" value="<?php $this->remember('mail'); ?>"<?php if ($this->options->commentsRequireMail): ?> required<?php endif; ?> />
		    			<input placeholder="<?php _e('网站'); ?>" type="url" name="url" id="url" class="text" placeholder="<?php _e('http://'); ?>" value="<?php $this->remember('url'); ?>"<?php if ($this->options->commentsRequireURL): ?> required<?php endif; ?> />
    			</div>
            <?php endif; ?>
    		<p>
                <textarea rows="8" cols="50" name="text" id="textarea" class="textarea" placeholder="写下成为女装大佬的宣言吧！" required ><?php $this->remember('text'); ?></textarea>
           </p>
					<input type="hidden" name="_" value="<?php echo $this->security->getToken(str_replace('?sagiri_pjax','',$this->request->getRequestUrl())) ?>" />
    		<p align="right">
                <button style="padding:5px 13px;" type="submit" class="sagiri_btn" class="submit"><?php _e('提交评论'); ?></button>
            </p>
    	</form>
    	<script>
    		$("#comment-form").on('submit',function(){
    			$.ajax({    
                    type:'post',        
                    url:'<?php echo $this->permalink."comment?_=".$this->security->getToken(str_replace('?sagiri_pjax','',$this->request->getRequestUrl())) ?>',    
                    data:$("#comment-form").serialize(),  
                    dataType:'json',
                   	complete:function(data){   
                        alert("评论已发送");
                    }
                });
                return false;
    		})
    	</script>
    </div>
    <?php else: ?>
    <h3><?php _e('评论已关闭'); ?></h3>
    <?php endif; ?>
</div>
