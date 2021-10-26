<template>
    <navbar></navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from './components/UI/Navbar.vue'
export default {
  components: { Navbar },
    
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto Condensed', sans-serif;
}

.app {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}
</style>