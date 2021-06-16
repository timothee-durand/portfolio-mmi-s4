<template>
  <div class="container p-6 md:flex items-center flex-row-reverse justify-center m-0 mb-20">
    <img alt="Timothée DURAND" class=" w-6/12 m-auto md:m-0 md:ml-16" src="@/assets/img/timothee_durand.png"
         style="max-width: 260px;"/>
    <div class="max-w-md">
      <h1 class="font-serif font-bold text-4xl mt-5">Hey ! I'm Timothée DURAND</h1>
      <p class="font-serif font-medium text-2xl">I'm a french futur front-end and fullstack developper</p>
      <p class="font-sans inline-flex flex-wrap items-center	 text-lg">You can check my <strong  class="mx-1">projects</strong>
        <router-link class="inline-block p-1 rounded-sm link-bg mx-1" to="/portfolio">here</router-link>
      </p>

      <p class="font-sans inline-flex flex-wrap items-center	 text-lg">You can check my tests in the <strong  class="mx-1">lab</strong>
        <router-link class="inline-block p-1 rounded-sm link-bg mx-1" to="/lab">here</router-link>
      </p>
      <p class="font-sans inline-flex  items-center text-lg mt-1">You can know more <strong  class="mx-1">about me</strong>
        <router-link class="inline-block  p-1 rounded-sm link-bg mx-1 " to="/about">here</router-link>
      </p>
      <p class="font-sans inline-flex flex-wrap items-center	 text-lg mt-1">
        To <strong class="mx-1">contact</strong>  me you can come
        <router-link class="inline-block p-1 rounded-sm link-bg mx-1" to="/contact">here</router-link>
      </p>
      <p class="font-sans inline-flex flex-wrap items-center	mt-1 text-lg">
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
  title() {
    return params.baseTitle + "Home"
  },
  components: {}
}
</script>

<style>
.link-bg {
  position: relative;
  background-color: transparent;
  z-index: 0;
  overflow: hidden;
  transition: color 100ms ease;
  will-change: color;
}

.link-bg:after, .link-bg:before {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  display: block;
  transition: transform 100ms ease;
  will-change: transform;
}

.link-bg:before {
  background: #762b32;
}

.link-bg:after {
  background: #efc153;
  transform: translateX(-100%);
}

.link-bg:hover {
  color: #762b32;
}

.link-bg:hover::after {
  transform: translate(0);
}

.link-bg:hover::before {
  transform: translate(100%);
}

</style>
