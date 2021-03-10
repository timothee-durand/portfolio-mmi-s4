<template>
  <div >
    <div class="lg:hidden block relative ">
      <div class="burger-menu z-30 " @click="toggleBurger" :class="{'menu-on':show}">
        <div class="burger"></div>
      </div>
      <div
          class="bg-secondary rounded-full flex items-center justify-center bg-menu block w-12 h-12 overflow-hidden "
          ref="bg-menu">
      </div>

    </div>
    <transition name="slide">
      <div
          class="h-screen w-full flex flex-col items-center justify-around absolute top-0
          left-0 lg:flex lg:justify-items-end lg:items-end lg:h-20 lg:bg-transparent "
          v-if="show">
        <div class="w-6/12 h-64 lg:h-10 lg:w-4/12   flex flex-col justify-around lg:flex-row">
          <router-link v-for="page in pagesAffichees" :key="page.path" :to="'/'+page.path"
                       exact-active-class="active-page"
                       class="font-bold text-3xl font-serif capitalize lg:text-2xl link-header">
            <p @click="closeBurger">{{ page.name }}</p>
          </router-link>
        </div>


      </div>
    </transition>

  </div>


</template>


<script>


import params from "@/param/params.js";

export default {
  name: "Burger",
  components: {},
  props: {
    pagesListe: {
      type: Array,
      default: function () {
        return [
          "portfolio",
          "home"
        ]
      }
    }
  },
  data() {
    return {
      show: false,
      offsetX: 0,
      offsetY: 0,
      scale: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
    this.calculateValues();
    this.onResize();
  },
  computed: {
    pagesAffichees: function () {
      return this.pagesListe;
    },
  },
  methods: {
    toggleBurger() {
      this.show = !this.show;

      if (!this.show) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    closeBurger() {
      if( window.innerWidth > params.breakpointLaptop) return;
      this.show = false;
      this.closeMenu()
    },
    openBurger() {
      this.show = true;
      console.log("open burger", this.show)
      this.openMenu()
    },
    onResize() {
      //ajuste visibilité menu
      this.show = window.innerWidth > params.breakpointLaptop;
    },
    calculateValues() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const offsetValue = 25;
      //  Offsets to center the circle
      this.offsetX = (w / 2) - (this.$refs["bg-menu"].getBoundingClientRect().width / 2) - offsetValue;
      this.offsetY = (h / 2) - (this.$refs["bg-menu"].getBoundingClientRect().height / 2) - offsetValue;

      // Good old pythagoras
      const radius = Math.sqrt((h ** 2) + (w ** 2));
      this.scale = radius / (this.$refs["bg-menu"].getBoundingClientRect().width / 2) / 2 + .1;
    },

    openMenu() {
      this.$refs["bg-menu"].style.setProperty("--translate-x", `-${this.offsetX}px`);
      this.$refs["bg-menu"].style.setProperty("--translate-y", `${this.offsetY}px`);
      this.$refs["bg-menu"].style.setProperty("--scale", this.scale);
      this.$root.$el.classList.add("overflow-hidden")
    },

    closeMenu() {
      this.$refs["bg-menu"].style.setProperty("--scale", 1);
      this.$refs["bg-menu"].style.setProperty("--translate-x", 0);
      this.$refs["bg-menu"].style.setProperty("--translate-y", 0);

      setTimeout(function (){
        this.$root.$el.classList.remove("overflow-hidden")
      }, 300)

    }
  },
}
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: opacity .3s ease-out;
  will-change: opacity;
}

.slide-enter, .slide-leave-to
{
  opacity: 0;
}

a.link-header {
  font-weight: 400;
  transition: font-weight 200ms ease-in-out;
  will-change: font-weight;
}

a.link-header.active-page {
  font-weight: 700;
}

a.link-header:hover, a.link-header:focus {
  font-weight: 700;
}

.bg-menu {
  transform-origin: center center;
  transition: transform .5s;
  transform: translate(var(--translate-x), var(--translate-y)) scale(var(--scale));
  will-change: transform;
  pointer-events: none;
}

.burger-menu {
  --width-menu: 30px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
  height: 1.5rem;
  width: var(--width-menu);
  cursor: pointer;
  z-index: 20;
}

.burger {
  position: absolute;
  background: #efc153;
  top: 60%;
  right: 0;
  opacity: 1;
}

.burger, .burger:before, .burger:after {
  position: absolute;
  background: #efc153;
  width: var(--width-menu);
  height: 4px;
  content: "";
  display: block;
  border-radius: 10px;

}

.burger::before {
  top: 10px;
}

.burger::after {
  bottom: 10px;
}

.burger::after, .burger::before, .burger {
  transition: all .3s ease-in-out;
  -webkit-transition: all .3s ease-in-out;
}

.burger-menu.menu-on .burger::after {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  bottom: 0px;
}

.burger-menu.menu-on .burger::before {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  top: 0px;
}

.burger-menu.menu-on .burger {
  background: rgba(111, 111, 111, .0);
}


</style>
