<template>
  <section>
    <!-- thumbnail display -->

 
      <!-- main display -->
      <div v-if="loaded" class="projectBg">
        <div class="projectDrawer">
          <div class="description" ref="description">
            <h1>{{title}}</h1>
            <div id="tags">{{tags}}</div>


            <img v-if="!useVideoAsHero" class="hero" :src="getHeroFileName()" />
			<video v-else controls autoplay loop muted class="hero" width="100%">
                <source :src="getHeroFileName()" type="video/mp4" />
              </video>

            <div class="about">
              <h3>About the project</h3>
			  <div class="descriptionText">
              <div v-for="item of description" v-bind:key="item">
                {{item}}
                <br />
                <br />
              </div>
			  </div>
            </div>
          </div>

          <div class="videoContainer">
            <div v-for="(item, index) of vimeoIDs" v-bind:key="item">
              <vueVimeoPlayer class="movie" :video-id="vimeoIDs[index]" :player-width="videoWidth"></vueVimeoPlayer>
            </div>
          </div>

          <div class="videoContainer">
            <div v-for="(item, index) of movies" v-bind:key="item">
              <video controls autoplay loop muted class="movie" width="100%">
                <source :src="getFileMovieName(index)" type="video/mp4" />
              </video>
            </div>
          </div>

          <div class="imgContainer">
            <div v-for="(item, index) of images" v-bind:key="item">
              <img class="images" :src="getFileName(index)" />
            </div>
          </div>
        </div>
      </div>

  </section>
</template>

<script>
import { vueVimeoPlayer } from "vue-vimeo-player";
import projectInfo from "../assets/filenames.json";
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
		loaded: false,
		description: [],
		videoWidth: 0,
		useVideoAsHero: false,
    };
},
mounted() {
	this.readJson()
},
props: {
	identifier: String,
},
watch: {
    identifier: function (val, oldVal) {
		// console.log('new: %s, old: %s', val, oldVal)
		this.loaded = false;
		this.readJson()
		this.loaded = true;
	},
},
components: {
	vueVimeoPlayer
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
		this.videoWidth = window.innerWidth * 0.8 * 0.8;
		console.log(this.videoWidth);
		this.loaded = true;

		if (json.useVideoAsHero != undefined) {
			this.useVideoAsHero = true
			this.hero = this.movies[0]
			this.movies = this.movies.slice(1, this.movies.length)
		}
	},
    getFileName(i) {
      	// console.log("../assets/" + this.identifier + "/" + this.images[i]);
      	return require("../assets/" + this.identifier + "/" + this.images[i]);
    },
    getFileMovieName(i) {
	  	// console.log("../assets/" + this.identifier + "/" + this.images[i]);
	  	console.log("../assets/" + this.identifier + "/" + this.movies[i])
	  	return require("../assets/" + this.identifier + "/" + this.movies[i]);
	  
    },
    getHeroFileName(str) {
      	// console.log("../assets/" + this.identifier + "/" + this.hero);
      	return require("../assets/" + this.identifier + "/" + this.hero);
    },
    getVimeoID(i) {
      	return "https://player.vimeo.com/video/" + this.vimeoIDs[i];
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

.projectBg {
  position: fixed;
  right: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 1;
  color: #44433E;
  text-align: center;
}



.projectDrawer {
  overflow-y: scroll;
  height: 100vh;
}


.hero {
  max-height: 90vh;
  max-width: 100%;
}
.videoContainer {
  width: 100%;
  text-align: center;
}

.videoContainer .movie {
  width: 80%;
  margin: 10%;
  max-height: 80vh;
}

#tags {
  font-size: 0.9em;
  color: rgb(80, 79, 73);
  margin-bottom: 20px;
}
.description {
  /* position: fixed;
	mix-blend-mode: difference;
	transition: all 0.5s;*/

  margin: 10%;
}
.about {
	text-align: left;
  	width: 100%;
}


@media (min-width: 635px){
 
.about .descriptionText {
	column-count: 2;
	column-gap: 40px;
}
 
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
