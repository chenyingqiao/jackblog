<template>
	<ul class="article-list list-unstyled clearfix">
		<li v-for="(index ,article) in articleList" class="article-item" :class="article.images.length > 0 ? 'have-img' : ''">
			<a v-if="article.images.length > 0" v-link="{ name: 'article', params: {aid: article._id } }" class="wrap-img">
				<img :src="article.images[0].url" />
			</a>
			<div>
			  <p class="list-top">               
			  <span class="time">{{ article.publish_time | customTime }}</span>
			  </p>
			  <h4 class="title">
			  	<a v-link="{ name: 'article', params: {aid: article._id } }" class="link-title">{{article.title}}</a>
			  </h4>
			  <div class="list-footer">
			    <span>阅读 {{article.visit_count}}</span>
			    <!-- <span> · 评论 {{article.comment_count}}</span>         -->
			    <span> · 喜欢 {{article.like_count}}</span>
			    <span v-show="auth.token && auth.user && auth.user.uid==article.uid"> · <a href="http://api-lerko.ngrok.cc/editor?aid={{article._id}}">编辑</a></span>
			    <span v-show="auth.token && auth.user && auth.user.uid==article.uid"> · <a @click="deleteArticle({aid:article._id,id:index})">删除</a></span>
			  </div>
			</div>
		</li>
		<li v-if="articleList.length < 1" class="no-content">正在大力回车...</li>
	</ul>
</template>

<script>
export default {
  props: ['articleList','auth'],
  methods:{
  	deleteArticle(index){
  		this.$parent.deleteArticle(index)
  	}
  }
}
</script>

<style>
	.main-content {
	    max-width: 900px;
	}
</style>