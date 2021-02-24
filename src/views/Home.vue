<template>
  <div class="container p-6 md:flex items-center flex-row-reverse justify-center m-0 mb-20">
    <img alt="Timothée DURAND" class=" w-6/12 m-auto md:m-0 md:ml-16" src="@/assets/img/timothee_durand.png"
             style="max-width: 260px;"/>
    <div>
      <h1 class="font-serif font-bold text-4xl mt-5">Hey ! I'm Timothée DURAND</h1>
      <p class="font-serif font-medium text-2xl">I'm a french futur front-end and fullstack developper</p>
      <p class="font-sans	 text-lg">You can check my project
        <router-link class="inline bg-secondary p-1 rounded-sm" to="/portfolio">here</router-link>
        <br/>
        If you want to know a bit more about me it's
        <router-link class="inline bg-secondary p-1 rounded-sm" to="/about">here</router-link>
        <br/>
        To contact me you can come
        <router-link class="inline bg-secondary p-1 rounded-sm" to="/contact">here</router-link>
        <br/>
        And to stay in touch follow me on my social media !
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import params from "@/param/params.js";

export default {
  name: 'Home',
  title(){
    return params.baseTitle + "Home"
  },
  components: {}
}
</script>
