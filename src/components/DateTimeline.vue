<template>
  <li class="mb-2 ">
    <div class="flex relative">
      <div class="absolute c-triangle-left ml-6 mt-3 left-0 top-0"></div>
      <div class="bg-accent rounded-full h-4 w-4 mt-3 ml-2"></div>
      <div class="ml-2 md:ml-4 flex-1 border-secondary border-2 rounded-md">
        <p class="font-medium font-serif md:text-xl bg-secondary p-3">{{ name }}</p>
        <div class=" bg-white text-black p-3 rounded-b-md">
          {{ dateDebut | moment("YYYY") }} - {{ dateFin | moment("YYYY") }}
        </div>
      </div>
    </div>
  </li>
</template>
<script>


export default {
  name: 'date-timeline',
  props: {
    name: {
      type: String,
      default: "Formation"
    },
    dateDebut: {
      type: String
    },
    dateFin: {
      type: String
    },


  },
}
</script>
