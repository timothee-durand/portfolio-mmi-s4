<template>
  <div>
    <div class="lg:hidden block ">
      <div class="burger-menu" @click="toggleBurger" :class="{'menu-on':show}">
        <div class="burger"></div>
      </div>
      <div
          class="bg-secondary rounded-full flex items-center justify-center bg-menu block w-12 h-12 overflow-hidden"
          ref="bg-menu">
        <!--        <div class="cursor-pointer">-->
        <!--          <div class="cursor-pointer absolute top-0 right-0 "  v-if="show" @click="closeBurger">-->
        <!--            <svg class="outline-none  w-1 h-1" viewBox="0 0 17.718 17.714"-->
        <!--                 xmlns="http://www.w3.org/2000/svg" >-->
        <!--              <path id="Icon_ionic-ios-close"-->
        <!--                    d="M22.244,20.145l6.328-6.328a1.483,1.483,0,0,0-2.1-2.1l-6.328,6.328L13.818,11.72a1.483,1.483,0,1,0-2.1,2.1l6.328,6.328-6.328,6.328a1.483,1.483,0,1,0,2.1,2.1l6.328-6.328,6.328,6.328a1.483,1.483,0,1,0,2.1-2.1Z"-->
        <!--                    data-name="Icon ionic-ios-close" fill="#efc153" transform="translate(-11.285 -11.289)"/>-->
        <!--            </svg>-->
        <!--          </div>-->
        <!--          <div v-else class="cursor-pointer">-->
        <!--            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 " viewBox="0 0 22.434 15.622" >-->
        <!--              <g id="Icon_feather-menu" data-name="Icon feather-menu" transform="translate(1 1)">-->
        <!--                <path id="Tracé_1" data-name="Tracé 1" d="M4.5,18H24.934" transform="translate(-4.5 -11.189)" fill="none"-->
        <!--                      stroke="#efc153" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>-->
        <!--                <path id="Tracé_2" data-name="Tracé 2" d="M4.5,9H24.934" transform="translate(-4.5 -9)" fill="none"-->
        <!--                      stroke="#efc153" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>-->
        <!--                <path id="Tracé_3" data-name="Tracé 3" d="M4.5,27H24.934" transform="translate(-4.5 -13.378)" fill="none"-->
        <!--                      stroke="#efc153" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>-->
        <!--              </g>-->
        <!--            </svg>-->
        <!--          </div>-->
        <!--        -->
        <!--        </div>-->


      </div>


    </div>
    <transition name="slide">
      <div
          class="h-screen w-screen flex flex-col items-center justify-around absolute z-10 top-0 left-0 lg:flex lg:justify-items-end lg:items-end lg:h-20 lg:bg-transparent"
          v-if="show">


        <div class="w-6/12 h-64 lg:h-10 lg:w-4/12  flex flex-col justify-around lg:flex-row">
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
  updated() {
    this.onResize()
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
      this.show = false;
      this.closeMenu()
    },
    openBurger() {
      this.show = true;
      console.log("open burger", this.show)
      this.openMenu()
    },
    onResize() {
      if (window.innerWidth > params.breakpointLaptop) this.show = true;
    },
    calculateValues() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      //const cssStyles = getComputedStyle(elem);
      //const offsetValue = Number(cssStyles.getPropertyValue('--offset-value'));
      const offsetValue = Number(getComputedStyle(this.$refs["bg-menu"]).getPropertyValue('--offset-value'));

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
    },

    closeMenu() {
      this.$refs["bg-menu"].style.setProperty("--scale", 1);
      this.$refs["bg-menu"].style.setProperty("--translate-x", 0);
      this.$refs["bg-menu"].style.setProperty("--translate-y", 0);
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
  margin: 20px;
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
