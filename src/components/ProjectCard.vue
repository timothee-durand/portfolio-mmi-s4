<template>
  <router-link :to="{name:'SingleProject', params:{slug:project.acf.slug}}">
    <div :style="'background-image: url(\''+project.acf.thumbnail+'\');'"
         class="border-accent border-2 bg-center bg-cover bg-scroll h-full bg-project">
      <div class="bg-secondary bg-opacity-75 p-10 flex flex-col  justify-center h-full ">
        <h3 class="font-serif font-bold text-3xl leading-6">{{ project.acf.title }}</h3>
        <p class="font-sans text-1xl">{{ project.acf.subtitle }}</p>
          <ul class="list-none p-0 m-0 flex flex-wrap lg:hidden">
            <li class="mr-2"><strong>Keywords :</strong></li>
            <li v-for="(keyword, index) in keywordsArray" :key="keyword+index" class="mr-2 font-serif underline ">{{keyword }}</li>
          </ul>


      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProjectCard",
  computed:{
    keywordsArray(){
      return this.project.acf.keywords.split(", ");
    }
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
.bg-project {
  transition: all ease 300ms;
  -webkit-background-size: 100%;
  background-size: 100%;
}

.bg-project:hover {
  background-size:120%;
}
</style>
