<template>
    <div id="filters">
        <h3>filters</h3>
        <p>Rating highest</p>
        <p>Rating lowest</p>
        <p>Year newest</p>
        <p>Year oldest</p>
    </div>
</template>
<script>
export default {
    name: 'FiltersComponent',
    props: {
        msg: String
    } 
}
</script>
<style lang='scss' scoped>
	#filters {
		text-align: left;
		color: rgb(143, 143, 143);
		cursor: pointer;

		p {
			margin-left: 10px;
		}
	}
</style>