<template>
  <div class="bg-secondary rounded-full flex items-center justify-center" :class="[width, height]">
    <slot/>
  </div>
</template>
<script>
export default {
  name: 'rounded-svg',
  props: [
    "width",
    "height",
  ]
}
</script>
