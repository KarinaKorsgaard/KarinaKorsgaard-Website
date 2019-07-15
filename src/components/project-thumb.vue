<template>
  <section v-if="loaded">
    <!-- thumbnail display -->
    <div class="thumbContainer">
		
      <div
        class="thumbImg"
        v-bind:style="{ 'background-image': 'url(' + getHeroFileName() + ')' }"
      />
      <div class="text">{{title}}</div>
    </div>
  </section>
</template>

<script>
import projectInfo from "../assets/filenames.json";
export default {
  name: "Project-Thumb",
  data: function() {
    return {
      title: "",
      hero: "",
      loaded: false
    };
  },
  mounted() {

	console.log(this.identifier)
	// console.log(this.identifier)
    const json = projectInfo[this.identifier];

    this.title = json.title;
    this.loaded = true;
    this.hero = json.hero;
  },
  props: {
	identifier: String,
  },
  components: {
  },
  methods: {
    getHeroFileName(str) {
      // console.log("../assets/" + this.identifier + "/" + this.hero);
      return require("../assets/" + this.identifier + "/" + this.hero);
    }
  }
};
</script>

<style scoped>

.thumbContainer .text {
  position: relative;
  width: 80%;
  bottom: 20%;
  left: 10px;
  opacity: 0;
  transition: all 0.5s;
  font-weight: bold;
  font-size: 1.2em;
  background-color: aliceblue;
  padding: 10px;
  color: black;
  
}
nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   cursor: pointer;
   text-decoration: none !important;
 }
.thumbContainer:hover .text {
	opacity: 1;
}
.thumbContainer {
  width: 200px;
  height: 300px;
}


.thumbContainer .thumbImg {
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
  filter: none;
  transition: all 0.5s;
}
.thumbContainer:hover .thumbImg {
  filter: grayscale(100%) brightness(50%);
}
</style>
