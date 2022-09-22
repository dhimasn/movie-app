<template>
    <div class="home"></div>
        <NavbarComponent />
        <SidebarComponent />
        <MovielistComponent />

</template>
<script>
import NavbarComponent from '@/components/NavbarComponent';
import MovielistComponent from '@/components/MovielistComponent';
import SidebarComponent from '@/components/SidebarComponent';
export default {
    name:"HomeViews",
    components:{
    NavbarComponent,
    MovielistComponent,
    SidebarComponent
    },
}
</script>
<style lang="scss" scoped>
	.home {
		display: flex;
		flex-direction: column;

		#main-section {
			display: flex;
			margin-top: 50px;
		}
	}
</style>