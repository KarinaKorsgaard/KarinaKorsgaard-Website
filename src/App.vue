<template>
  <div id="app">
    <Menu></Menu>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Menu from "./components/menu.vue";
export default {
  name: "app",
  data: function() {
    return {};
  },
  components: {
    Menu
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css?family=Marcellus&display=swap");



#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
  max-width: 80%;
  margin: 0 auto;
}
h1,
h2,
h3 {
  font-family: "Poppins", sans-serif;
}
h1 {
  text-align: left;
  font-weight: bolder;
  font-size: 3.5em;
  margin: 0;
}

.slide-enter-active {
  transform: translate3d(100%, 0, 0);
}
.slide-enter-to {
  transform: translate3d(0%, 0, 0);
}
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s ease-in-out;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  height: 0;
}
</style>
