<template>
  <iframe :src="src"
          title="Generative landscape" scrolling="no" frameborder="0" :height="height" allowtransparency="true">
  </iframe>
</template>
<script>
export default {
  name : "Codepen",
  props : {
    url : {
      type : String,
      required : true
    },
    height : {
      type : Number,
      default : 500
    }
  },
  computed : {
    src() {
      const arrayUrl = this.url.split("/")
      console.log("arrayurl", arrayUrl)
      return `https://codepen.io/${arrayUrl[3]}/embed/preview/${arrayUrl[5]}?default-tabs=result&amp;height=${this.height}&amp;host=https%3A%2F%2Fcodepen.io&amp;slug-hash=${arrayUrl[5]}`
    }
  }
}
</script>
<style scoped>
iframe {
  width: 100%;
  overflow: hidden;
}
</style>
