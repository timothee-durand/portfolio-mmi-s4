<template>
  <header class=" bg-primary-200 flex flex-row items-center justify-between w-full pt-3 px-3 z-10">
    <router-link to="/" exact>
      <img src="@/assets/img/sombre.svg" class="w-12 lg:z-20" alt="logo timothée durand" width="50"/>
    </router-link>

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
          name: "lab",
          path:'lab',
          order: 2
        },
        {
          name: "about",
          path: "about",
          order: 3
        },
        {
          name: "contact",
          path:"contact",
          order: 4
        }
      ]
    }
  },
}
</script>
