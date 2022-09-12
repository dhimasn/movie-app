<template>
	<div id="Movie-container">'Movie List'</div>
</template>
<script>
export default {
  name: 'MovieList',
  props: {
    msg: String
  } 
}
</script>
<style lang='scss' scoped>
	#movie-container {
		padding-top: 1rem;
		display: flex;
		flex-wrap: wrap;
		flex-grow: 2;
		justify-content: center;
	}
</style>