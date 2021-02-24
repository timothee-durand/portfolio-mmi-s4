<template>
  <div class="min-h-screen bg-primary text-accent flex items-center justify-between justify-center flex-col p-3"
       ref="body">
    <div id="overlay" class="h-screen bg-accent absolute top-0 left-0 z-30" ref="overlay"></div>
    <navbar></navbar>
    <transition @enter="leavePage">
      <router-view class="mt-16 lg:mt-8"/>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import anime from 'animejs/lib/anime.es.js';



export default {
  name: "App",

  components: {Footer, Navbar},
  mounted() {
    //init data from Wordpress REST API
    this.$store.dispatch("initData");
  },
  methods: {
    leavePage(el, done) {
      const overlay = this.$refs.overlay;

      let timeline = anime.timeline({
        complete: function(){
          this.$root.$el.classList.remove("overflow-hidden")
          done()
        }.bind(this),
        begin:function (){
          this.$root.$el.classList.add("overflow-hidden")
        }.bind(this),
        duration:500,
        easing: "easeOutQuad",
      })

      timeline.add({targets:overlay, width: "100vw"});
      timeline.add({targets:overlay, width: "100vw", translateX: "100vw"});
      timeline.add({targets:overlay, width: "0", translateX: "100vw"});
      timeline.add(  {targets:overlay, width: "0", translateX: "0"});

      timeline.play();

    },

  },


}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&family=Rokkitt:wght@400;500;700&display=swap');

</style>
