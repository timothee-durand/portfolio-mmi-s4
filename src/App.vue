<template>
  <div class="min-h-screen bg-primary text-accent flex items-center justify-center flex-col p-3">
    <navbar></navbar>
    <router-view class="mt-16"/>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {Footer, Navbar},
  mounted() {
    //init data from Wordpress REST API
    this.$store.dispatch("initData");
  },

}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Rokkitt:wght@400;500;700&display=swap');
</style>
