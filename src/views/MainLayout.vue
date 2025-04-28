<template>
    <div id="app">
        <header>
            <HeaderPage />
            <VideoPage />
        </header>
        <main>
           <router-view />
        </main>
    </div>
</template>
<script>
import HeaderPage from '../components/HeaderPage.vue'
import VideoPage from '../views/VideoPage.vue'
export default {
    name: "MainLayout",
    components: {
        HeaderPage,
        VideoPage
    }
}
</script>
<style scoped>
#app{
    padding: 1cm;
    margin: 0;
}

</style>
