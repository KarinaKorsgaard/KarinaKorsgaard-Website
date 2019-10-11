<template>
  <section>
    <!-- thumbnail display -->

    <!-- main display -->

    <div class="projectDrawer" v-if="loaded">
      <div class="drawerContent">
        <div
          v-if="!useVideoAsHero"
          class="hero"
          v-bind:style="{ 'background-image': 'url(' + getFileName(hero) + ')' }"
        />
        <video v-else controls autoplay playsinline loop muted class="video">
          <source :src="getFileName(hero)" type="video/mp4" />
        </video>

        <h1>{{title}}</h1>
        <div class="about">
          <div class="clientAndTags">
            <div id="client">{{client}}</div>
            <div id="tags">{{tags}}</div>
          </div>

          <QuantumLinks v-if="identifier == 'Kvante'"></QuantumLinks>

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
        <img src="../assets/back.png" id="back" />
      </router-link>
    </div>
  </section>
</template>

<script>
import { vueVimeoPlayer } from "vue-vimeo-player";
import projectInfo from "../assets/filenames.json";
import QuantumLinks from "@/components/QuantumKate.vue";

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
    console.log("reads json");
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
    QuantumLinks
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

      if (json.useVideoAsHero != undefined) {
        this.useVideoAsHero = true;
        this.hero = this.movies[0];
        this.movies = this.movies.slice(1, this.movies.length);
      }
      this.loaded = true;
    },

    getFileName(str) {
      if (str == this.hero && this.useVideoAsHero)
        return require("../assets/" + this.identifier + "/" + this.hero.src);
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

<style lang="scss" scoped>
.projectDrawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;

  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;

  background-color: white;
  border: solid 1px;
  border-color: black;
  color: black;
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
  z-index: 2;
  top: 20px;
  right: 20px;
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
  
  .clientAndTags {
    width: 35%;
    min-width: 300px;
    font-size: 24px;
  }
}

#client {
  font-size: 1.2em;
  font-weight: bold;
}

.videoContainer {
  width: 100%;
  display: grid;
  
  @include small {
	  grid-template-columns: 1fr;
  }
    @include medium {
	  grid-template-columns: 1fr 1fr;
  }
  @include large {
	  grid-template-columns: 1fr 1fr 1fr;
  }

  grid-gap: 10px;
  .entry {
    margin-top: 30px;
    height: 100%;

    p {
      width: 90%;
      text-align: left;
      margin-top: 15px;
      font-size: 0.8em;
    }
  }
}

.imgContainer {
  width: 100%;
  display: grid;
  grid-gap: 10px;

  @include small {
	  grid-template-columns: 1fr;
  }
    @include medium {
	  grid-template-columns: 1fr 1fr;
  }
  @include large {
	  grid-template-columns: 1fr 1fr 1fr;
  }

  div {
    margin: 0px;
    width: 100%;
  }
  .images {
    width: 100%;
  }
}
</style>
