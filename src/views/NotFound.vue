<template>
  <div>
    <h2 class="text-2xl">404</h2>
    <p>Ooops, this page does not exist on this website</p>
    <router-link to="/" exact>Go back to home</router-link>
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

</style>
