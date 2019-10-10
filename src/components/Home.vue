<template>
  <main id="home">
    <div>
      <h1>Karina Korsgaard</h1>
    </div>

    <section class="projectContainer" id="projectContainer">
      <div v-for="(item) in projectIDs" :key="item">
        <my-router-link :id="item" @click.native="toggle(true)"></my-router-link>
      </div>
    </section>
  </main>
</template>

<script>
import myRouterLink from "../components/routerLink.vue";
import About from "../components/about.vue";
import { setTimeout, clearTimeout } from "timers";
import projectInfo from "../assets/filenames.json";

export default {
  name: "home",
  data: function() {
    return {
      somethingIsOpen: false,
      timer: null,
      projectIDs: []
    };
  },
  components: {
    myRouterLink,
    About
  },
  mounted() {
    console.log(this.$router.currentRoute.path);
    const path = this.$router.currentRoute.path;
    if (path.length > 1) this.somethingIsOpen = true;
    this.readJson();
  },

  methods: {
    toggle(param) {
      clearTimeout(this.timer);
      this.somethingIsOpen = param;
    },
    navigate() {
      this.toggle(false);
      this.$router.push("/");
    },
    readJson() {
	  const json = projectInfo;
      for (var k in json) {
        if (json[k].tag != "dontShow") {
          this.projectIDs.push(k + "");
		}
      }
    }
  },
  watch: {
    $route: function(to, from) {
      console.log(this.$router.history);
      /* console.log(to + " " + from)
				console.log(this.$router.history)
				console.log(this.$router.history.index)
				console.log(this.$router.history.stack)
			*/
      if (this.$router.history.current.name == "Home") {
        this.navigate();
      } else {
        this.toggle(true);
      }
      // if the current history index isn't at the last position, use 'back' transition
    }
  }
};
</script>

<style lang="scss">
.projectContainer {
  display: grid;
  grid-gap: 20px;
  margin-top: 60px;

  @include small {
    grid-template-columns: 1fr;
  }
  @include medium {
    grid-template-columns: 1fr 1fr;
  }
  @include large {
    grid-template-columns: repeat(3, 1fr);
  }
}

.link {
  text-decoration: none !important;
  cursor: pointer;
}
.link:hover {
  color: black;
}
</style>
