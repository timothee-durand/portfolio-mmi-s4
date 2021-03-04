<template>
  <div>
    <div ref="dot" id="dot"></div>
    <div ref="circle" id="circle"></div>
  </div>
</template>

<script>
export default {
name: "CursorFollower",
  mounted() {
    const dot = this.$refs.dot;
    const circle = this.$refs.circle
//
    const speed = 3;
    let endX = 0;
    let endY = 0;
    let _x = 0;
    let _y = 0;
//
    document.onmousemove = (event)=> {
      endX = event.pageX;
      endY = event.pageY;
      dot.style.top = endY - 6 + "px";
      dot.style.left = endX - 6 + "px";
    }

    function animateCircle() {
      requestAnimationFrame(animateCircle);
      _x += (endX - _x) / speed;
      _y += (endY - _y) / speed;
      circle.style.top = _y - 14 + "px"
      circle.style.left = _x - 14 + "px"
    }

    animateCircle();
  }
}
</script>

<style scoped>
#dot {
  position: absolute;
  width: 4px;
  height: 4px;
  background-color: #efc153;
  border-radius: 50%;
}

#circle {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid #efc153;
  border-radius: 50%;
}
</style>
