<template>
  <section>
	 
    <!-- thumbnail display -->

    <!-- main display -->
<transition name="slide">
      <div class="projectDrawer" v-if="loaded">
		  <div class="drawerContent">
		<div
			v-if="!useVideoAsHero"
        	class="hero"
        	v-bind:style="{ 'background-image': 'url(' + getFileName(hero) + ')' }"
      	/>
        <video v-else controls
		autoplay
		playsinline
		loop
		muted
		class="video"
		>
          <source :src="getFileName(hero)" type="video/mp4" />
        </video>
		
		<h1>{{title}}</h1>
        <div class="about">
          <div class="clientAndTags">
            <div id="client">{{client}}</div>
            <div id="tags">{{tags}}</div>
          </div>

          <div class="description">
            <div v-for="(item) of description" v-bind:key="item">
              {{item}}
              <br />
              <br />
            </div>
          </div>
        </div>

       
        <div v-for="(item, index) in vimeoIDs" v-bind:key="index">
        	<vueVimeoPlayer :video-id="vimeoIDs[index]" :player-width="videoWidth"></vueVimeoPlayer>
        </div>
       

        <div class="videoContainer">
          <div v-for="(item, index) in movies" v-bind:key="index" class="entry">
            <video controls autoplay playsinline loop muted class="video" max-width="100%">
              <source :src="getFileName(movies[index].src)" type="video/mp4" />
            </video>
			<p v-if="item.text!=''">{{item.text}}</p>
          </div>
        </div>

        <div class="imgContainer">
          <div v-for="(item, index) in images" v-bind:key="index">
            <img class="images" :src="getFileName(images[index].src)" />
          </div>
        </div>
      </div>

	  <router-link class="link" :to="{ name: 'Home' } ">
	  	<img src="../assets/back.png" id="back"/>
	  </router-link>

      </div>

	  
</transition>
  </section>
</template>

<script>
import { vueVimeoPlayer } from "vue-vimeo-player";
import projectInfo from "../assets/filenames.json";
import Home from "../components/Home.vue";

export default {
  name: "Project",
  data: function() {
    return {
      isMinified: false,
      images: [],
      vimeoIDs: [],
      movies: [],
      title: "",
      tags: "",
	  hero: "",
	  client: "",
      loaded: false,
      description: [],
      videoWidth: 0,
      useVideoAsHero: false
    };
  },
  mounted() {
    this.readJson();
  },
  props: {
    identifier: String
  },
  watch: {
    identifier: function(val, oldVal) {
      // console.log('new: %s, old: %s', val, oldVal)
      this.loaded = false;
      this.readJson();
      this.loaded = true;
    }
  },
  components: {
	vueVimeoPlayer,
	Home,
  },
  methods: {
    readJson() {
      // console.log(this.identifier)
      // console.log(this.identifier)
      const json = projectInfo[this.identifier];
      // console.log(json[this.identifier].filenames)
      this.images = json.images;
      this.movies = json.movies;
      this.vimeoIDs = json.vimeoIDs;
      this.description = json.description;
      this.title = json.title;
      this.tags = json.tags;
	  this.hero = json.hero;
	  this.client = json.client;
      this.videoWidth = window.innerWidth;
      console.log(this.videoWidth);
      this.loaded = true;

      if (json.useVideoAsHero != undefined) {
        this.useVideoAsHero = true;
        this.hero = this.movies[0];
        this.movies = this.movies.slice(1, this.movies.length);
      }
	},

	getFileName(str) {
		if (str == this.hero && this.$attrsuseVideoAsHero) return require("../assets/" + this.identifier + "/" + this.hero.src);
	  	// console.log("../assets/" + this.identifier + "/" + this.images[i]);
	  	// console.log("../assets/" + this.identifier + "/" + str);
	  	return require("../assets/" + this.identifier + "/" + str);
    },
   
    open() {
      this.isMinified = false;
    },
    close() {
      this.isMinified = true;
    }
  }
};
</script>

<style scoped>

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

.projectDrawer {
	position: relative;
	z-index: 2;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  height: 90vh;
  margin: 2%;
  background-color: white;
  border: solid 1px;
  border-color: black;
  color:black;
  font-size: calc(18px + 8 * ((100vw - 320px) / 1280));

}
.drawerContent {
	width: 90%;
	margin: 5%;
}


.hero {
  	height: 60vh;
  	width: 100%;
	background-size: cover;
  	background-position: center center;
}

.video {
	max-width: 100%;
	max-height: 100vh;
}

#back {
  position: fixed;
  top: 70px;
  right:50px;
  width: 50px;
  mix-blend-mode: difference;
  cursor: pointer;
  transition: transform 0.2s;
}
#back:hover {
	transform: scale(1.1);
}


.about {
  text-align: left;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.about .description {
	width: 60%;
	min-width: 300px;
}
.about .clientAndTags{
	width: 35%;
	min-width: 300px;
	font-size: 24px;
}

#client {
	font-size: 1.2em;
	font-weight: bold;
}

.videoContainer {
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.videoContainer .entry{
 display:flex;
 margin-top: 30px;
 max-height: 100%;
 flex-wrap: wrap;
}
.videoContainer .entry p{
 width: 250px;
 text-align: left;
 align-self: center;
 margin: 15px;
}

.imgContainer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.imgContainer div {
  margin: 5px;
  max-height: 80vh;
  position: relative;
}

.images {
  margin: 5px;
  max-height: 80vh;
  max-width: 80%;
  position: relative;
}

</style>
