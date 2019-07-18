<template>
  <section v-if="loaded">
    <!-- thumbnail display -->
    <div class="thumbContainer">
		      <div class="title">{{title}}</div>
	  <div class="tags">{{tags}}</div>
	  <div class="client">{{client}}</div>
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
	  tags: "",
    };
  },
  mounted() {

	console.log(this.identifier)
	// console.log(this.identifier)
    const json = projectInfo[this.identifier];

    this.title = json.title;
    this.loaded = true;
	this.hero = json.hero;
	this.client = json.client;
	this.tags = json.tags;
  },
  props: {
	identifier: String,
  },
  components: {
  },
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
  width: 300px;
  height: 450px;
  background-color: white;
  border-style: solid;
  border-width: 1px 1px 5px 1px;
  border-color: #333333;
  color:#333333;
  position: relative;
}
.thumbContainer .title {


  margin: 25px 25px;
  font-weight: bold;
  font-size: 1.3em;
line-height: 0.5em;
  font-style: normal;
  text-decoration: none;
}
.thumbContainer .tags {
	margin: 0px 25px;
	font-size: 14px;
	height: 45px;
	overflow: hidden;
}
.thumbContainer .client {
	margin: 10px 25px;
	font-weight: bold;
	font-size: 14px;
}

.thumbContainer .thumbImg {
  background-size: cover;
  background-position: center center;
  width: 250px;
  height: 250px;
  margin: 25px;
	position: absolute;
	bottom: 25px;
}

</style>
