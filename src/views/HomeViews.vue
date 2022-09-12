<template>
    <div class="home"></div>
        <navbar />
            <div id="main-section">
                <sidebar />
                <movie-list />
            </div>>
</template>
<script>
import NavBar from '../components/NavBar';
import MovieList from '../components/MovieList';
import SideBar from '../components/SideBar';
export default {
    name:"HomeViews",
    components:{
        NavBar,
        MovieList,
        SideBar
    },
}
</script>