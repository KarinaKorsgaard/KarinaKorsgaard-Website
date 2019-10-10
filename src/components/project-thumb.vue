<template>
  <section v-if="loaded">
    <!-- thumbnail display -->
    <div class="thumbContainer">
      <div class="title">{{title}}</div>
      <div class="tags">{{tags}}</div>
      <div class="client"><span class='notbold'>Client: </span class='notbold'>{{client}}</div>
      <div
        class="thumbImg"
        v-bind:style="{ 'background-image': 'url(' + getHeroFileName() + ')' }"
      />
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
      loaded: false,
      client: "",
      tags: ""
    };
  },
  mounted() {
    
    // console.log(this.identifier)
    const json = projectInfo[this.identifier];

    this.title = json.title;
    this.loaded = true;
    this.hero = json.hero;
    this.client = json.client;
    this.tags = json.tags;
  },
  props: {
    identifier: String
  },
  components: {},
  methods: {
    getHeroFileName() {
      // console.log("../assets/" + this.identifier + "/" + this.hero);
      return require("../assets/" + this.identifier + "/" + this.hero);
    }
  }
};
</script>

<style scoped>
.thumbContainer {
  width: 80%;
  padding: 10%;
  height: 450px;
  background-color: white;
  border-style: solid;
  border-width: 1px 1px 5px 1px;
  border-color: #333333;
  color: #333333;
  position: relative;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 60%;
  grid-gap: 10px;

  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}
.thumbContainer:hover {
  transform: scale(1.05);
}
.thumbContainer .title {
  font-weight: bold;
  font-size: 1.3em;
  font-style: normal;
  text-decoration: none;
}
.thumbContainer .tags {
  height: 45px;
  overflow: hidden;
}
.thumbContainer .client {
  font-weight: bold;
}

.thumbContainer .thumbImg {
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100%;
}

.notbold {
	font-weight: normal;
	font-size: 1em;
}
</style>
