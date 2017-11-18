<template>
  <div id="app">

    <Navbar />
        <router-view></router-view>
    <bottom-nav />
    
  </div>
</template>
<script>
import Home from './Components/Home.vue'
import Navbar from './Components/Navbar.vue'
import BottomNav from './Components/BottomNav.vue'

export default {
  components :{
    Home,
    Navbar,
    BottomNav,
  },

}
</script>

<style>
  #app{
    transition: all .5s ease;;
  }
  .canvas{
    transform: translateX(200px);
  }

</style>
