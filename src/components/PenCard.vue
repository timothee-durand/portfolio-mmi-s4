<template>
  <router-link :to="{name:'SinglePen', params:{slug:pen.acf.acf_pen_slug}}">
    <div :style="'background-image: url(\''+pen.acf.acf_pen_url+'/image/small.png\');'"
         class="border-accent border-2 bg-center bg-cover bg-scroll h-full bg-project">
      <div class="bg-secondary bg-opacity-75 p-10 flex flex-col  justify-center h-full ">
        <h3 class="font-serif font-bold text-3xl leading-6">{{ pen.acf.acf_pen_title }}</h3>
        <p class="font-sans text-1xl">{{ pen.acf.acf_pen_description }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "PenCard",
  computed: {},
  props: {
    pen: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.bg-project {
  transition: all ease 300ms;
  -webkit-background-size: 100%;
  background-size: 100%;
}

.bg-project:hover {
  background-size: 120%;
}
</style>
