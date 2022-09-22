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
    data(){
        return{
            filters:[
                {
                    name:"Rating Highest",
                    key:"rating",
                    order:"desc"
                },
                {
                    name:"Rating lowest",
                    key:"rating",
                    order:"desc"
                },
                {
                    name:"year newest",
                    key:"year",
                    order:"desc"
                },
                {
                    name:"year oldest",
                    key:"year",
                    order:"desc"
                },
            ]
        }
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