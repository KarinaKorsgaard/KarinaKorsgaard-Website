<template>
  <section>
    <!-- thumbnail display -->

    <!-- main display -->

    <div class="projectDrawer" v-if="loaded">
      <div
        v-if="!useVideoAsHero"
        class="hero"
        v-bind:style="{ 'background-image': 'url(' + getHeroFileName() + ')' }"
      />
      <video v-else controls autoplay loop muted class="heroVideo" width="100%">
        <source :src="getHeroFileName()" type="video/mp4" />
      </video>
      <div class="drawerContent">
        <h1>{{title}}</h1>
        <div class="about">
          <div class="clientAndTags">
            <div id="client">{{client}}</div>
            <div id="tags">{{tags}}</div>
          </div>

          <div class="description">
            <div v-for="item of description" v-bind:key="item">
              {{item}}
              <br />
              <br />
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
      this.client = json.client;
      this.videoWidth = window.innerWidth * 0.8 * 0.8;
      console.log(this.videoWidth);
      this.loaded = true;

      if (json.useVideoAsHero != undefined) {
        this.useVideoAsHero = true;
        this.hero = this.movies[0];
        this.movies = this.movies.slice(1, this.movies.length);
      }
    },
    getFileName(i) {
      // console.log("../assets/" + this.identifier + "/" + this.images[i]);
      return require("../assets/" + this.identifier + "/" + this.images[i]);
    },
    getFileMovieName(i) {
      // console.log("../assets/" + this.identifier + "/" + this.images[i]);
      console.log("../assets/" + this.identifier + "/" + this.movies[i]);
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
.projectDrawer {
  position: relative;
  overflow-y: scroll;
  height: 90vh;
  margin: 2%;
  background-color: white;
  border: solid 1px;
  border-color: black;
  color: black;
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
.heroVideo {
  max-width: 100%;
  max-height: 100vh;
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
  font-size: 18px;
}
.about .clientAndTags {
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
}

.videoContainer .movie {
  width: 80%;
  margin: 10%;
  max-height: 80vh;
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
