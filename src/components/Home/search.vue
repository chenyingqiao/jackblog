<template>
	<input type="text" v-model="search_keyword" @oninput="run_search()">
</template>

<script>
export default {
	data(){
		return {
			search_keyword:'',
			do_search:false
		}
	},
	watch:{
		search_keyword(){
			this.run_search()
		}
	},
	methods:{
		run_search(){
			this.do_search=true
			var self=this
			setTimeout(function(){
				console.log('lodash')
				self.do_search=false
				self.$parent.handleChange({
					'currentPage':1,
					'key_word':self.search_keyword,
					'tagId':''
				})
			})
			
		}
	}
}
</script>