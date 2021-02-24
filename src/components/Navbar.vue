<template>
  <header class=" bg-primary-200 flex flex-row items-center justify-between w-full pt-3 px-3 fixed top-0 left-0 z-10">
    <img src="@/assets/img/sombre.svg" class="w-12 pos" alt="logo timothée durand"/>
    <burger :pagesListe="pagesMenuBurger"></burger>
  </header>
</template>
<script>

import Burger from "./Burger.vue";

export default {
  components: {Burger, },
  data() {
    return {
      showBurger: false,
      pagesMenuBurger:[
        {
          name: "home",
          path:'',
          order: 0
        },
        {
          name: "portfolio",
          path:'portfolio',
          order: 1
        },
        {
          name: "about",
          path: "about",
          order: 2
        },
        {
          name: "contact",
          path:"contact",
          order: 3
        }
      ]
    }
  },
}
</script>
