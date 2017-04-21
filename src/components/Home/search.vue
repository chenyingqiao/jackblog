<template>
	<button>搜索</button>
	<input type="text" v-model="search_keyword" @oninput="run_search">
</template>

<script>
export default {
	data(){
		return {
			search_keyword:''
		}
	},
	methods:{
		run_search(){
			console.log(this.search_keyword);
			// this.$parent.handleChange({
			// 	'currentPage':1,
			// 	'sortName':sortName,
			// 	'key_word':this.search_keyword,
			// 	'tagId':''
			// })
		}
	}
}
</script>