<template>
  <div>
    <button type="button" @click="show = !show">
      <rounded-svg width="w-12" height="h-12" class="">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 22.434 15.622">
          <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(1 1)">
            <path id="Tracé_1" data-name="Tracé 1" d="M4.5,18H24.934" transform="translate(-4.5 -11.189)" fill="none" stroke="#efc153" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path id="Tracé_2" data-name="Tracé 2" d="M4.5,9H24.934" transform="translate(-4.5 -9)" fill="none" stroke="#efc153" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
            <path id="Tracé_3" data-name="Tracé 3" d="M4.5,27H24.934" transform="translate(-4.5 -13.378)" fill="none" stroke="#efc153" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
          </g>
        </svg>
      </rounded-svg>
    </button>
    <transition name="burger">
      <div v-if="show"
           class="min-h-screen w-screen flex flex-col items-center justify-around absolute z-10 top-0 left-0 bg-secondary">

        <svg class="w-6 h-6 absolute top-0 right-0 m-8 cursor-pointer" viewBox="0 0 17.718 17.714"
             xmlns="http://www.w3.org/2000/svg" @click="show = false">
          <path id="Icon_ionic-ios-close"
                d="M22.244,20.145l6.328-6.328a1.483,1.483,0,0,0-2.1-2.1l-6.328,6.328L13.818,11.72a1.483,1.483,0,1,0-2.1,2.1l6.328,6.328-6.328,6.328a1.483,1.483,0,1,0,2.1,2.1l6.328-6.328,6.328,6.328a1.483,1.483,0,1,0,2.1-2.1Z"
                data-name="Icon ionic-ios-close" fill="#efc153" transform="translate(-11.285 -11.289)"/>
        </svg>
        <div class="w-6/12 h-64  flex flex-col justify-around">
          <router-link v-for="page in pagesAffichees" :key="page.path" :to="'/'+page.path" class="font-bold text-3xl font-serif capitalize ">
            <p @click="closeBurger">{{ page.name }}</p>
          </router-link>
        </div>


      </div>
    </transition>
  </div>


</template>


<script>

 import RoundedSvg from "@/components/RoundedSvg.vue";
 export default {
   name: "Burger",
   components: {RoundedSvg},
   props: {
     pagesListe: {
       type: Array,
       default: function (){
         return [
           "portfolio",
           "home"
         ]
       }
     }
   },
   data() {
     return {
       show: false
     }
   },
   computed: {
     pagesAffichees: function () {
       return this.pagesListe;
     }
   },
   methods: {
     closeBurger() {
       this.show = false;
     }
   },
 }
</script>

<style>
.burger-enter-active, .burger-leave-active {
  transition: transform .5s ease-out;

}

.burger-enter, .burger-leave-to {
  transform: translateY(-3000px);
}

</style>
