<template>
  <div class="min-h-screen bg-primary text-accent flex items-center justify-between justify-center flex-col p-3 overflow-hidden"
       ref="body">
      <div id="overlay" class="h-screen bg-accent z-30  absolute top-0 left-0" ref="overlay"></div>
    <navbar></navbar>
    <CursorFollower/>
    <transition name="fade" mode="out-in">
      <router-view class="mt-16 lg:mt-8"/>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";


import CursorFollower from "@/components/CursorFollower.vue";



export default {
  name: "App",

  components: {CursorFollower, Footer, Navbar},


}
</script>
<style>

.fade-enter-active, .fade-leave-active {
  transition: transform ease-in .5s;
}

.fade-enter {
  transform: translateX(300%);
}

.fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-300%);
}
</style>
