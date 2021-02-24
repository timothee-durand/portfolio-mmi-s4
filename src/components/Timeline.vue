<template>
  <div class="relative w-8/12 m-8 z-0">
    <div class="border-r-2 border-accent absolute h-full top-0" style="left: 15px"></div>
    <ul class="list-none m-0 p-0">
      <date-timeline v-for="formation in formations" :key="formation.id" :date-debut="formation.acf.date_debut"
                     :date-fin="formation.acf.date_fin" :name="formation.acf.titre" class="mt-4"/>
    </ul>
  </div>
</template>
<script>
import DateTimeline from "./DateTimeline.vue";

export default {
  name: 'Timeline',
  components: {DateTimeline},
  props: {
    formations: {
      type: Array,
      required: true
    },
  },
}
</script>
