<template>
<div id='douban'>
	<ul>
		<li v-for='article in artices'>
		{{article.article}}
		</li>
	</ul>
</div>
</template>
<script>

    export default{
        data(){
            return{
          articles:[]
            }
        },
       mounted: function() {
    this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
        headers: {

        },
        emulateJSON: true
    }).then(function(response) {
      // 这里是处理正确的回调

        this.articles = response.data.subjects
        // this.articles = response.data["subjects"] 也可以

    }, function(response) {
        // 这里是处理错误的回调
        console.log(response)
    });
  },
        components:{

        }
    }
</script>