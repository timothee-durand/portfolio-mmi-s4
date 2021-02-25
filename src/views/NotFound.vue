<template>
  <div>
    <h2 class="text-404 text-center font-bold font-serif">404</h2>
    <p class="text-center text-3xl mb-10">Ooopsy, this page does not exist here</p>
    <router-link to="/" exact class=" bg-secondary p-1 rounded-sm text-4xl mx-auto block w-8/12 text-center link-bg">Go back to home</router-link>
  </div>

</template>

<script>
import params from "@/param/params.js";

export default {
  name: "NotFound",
  title() {
    return params.baseTitle + "404"
  }
}
</script>

<style scoped>
.text-404 {
  font-size:300px;
  line-height: 300px;
}
</style>
