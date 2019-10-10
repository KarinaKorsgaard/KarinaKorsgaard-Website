<template>
  <nav>
    <router-link :to="{name: 'Home'}">
      <p>Karina Korsgaard</p>
    </router-link>&nbsp;&nbsp;&nbsp;
    <router-link :to="{name: 'About'}">
      <p>Background</p>
    </router-link>
    <!--<router-link :to="{name: 'Playground'}"><p>Playground</p></router-link>-->
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  position: relative;
  z-index: 1;
  top: 0;
  font-weight: bolder;
  a {
    text-decoration: none;
    color: black;
  }
}
</style>