<template>
  <router-link :to="{name:'SingleProject', params:{slug:project.acf.slug}}">
    <div :style="'background-image: url(\''+project.acf.thumbnail+'\');'"
         class="border-accent border-2 bg-center bg-cover bg-scroll h-full">
      <div class="bg-secondary bg-opacity-75 p-10 flex flex-col  justify-center h-full ">

        <h3 class="font-serif font-bold text-3xl leading-6">{{ project.acf.title }}</h3>
        <p class="font-sans text-1xl">{{ project.acf.subtitle }}</p>


      </div>
    </div>
  </router-link>
  <!--  http://localhost:8080/uploads/pictum.jpg-->

</template>

<script>
export default {
  name: "ProjectCard",
  data() {
    return {}
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
