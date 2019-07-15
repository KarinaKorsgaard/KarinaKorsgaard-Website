<template>
  <div id="app">
    <section class="projectContainer" id="projectContainer">
      <my-router-link id="Kvante" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="SeniorAI" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Erdi" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Sydney" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Ma" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="12Movements" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="PMOS" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Fazer" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Experiments" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Ericsson" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Ba" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Mirror" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Tree" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Bymodel" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="MADE" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Poster" v-on:click.native="toggle(true)"></my-router-link>
    </section>

    <transition name="slide">
      <div v-if="somethingIsOpen" id="test">
        <router-view></router-view>
        <img id="back" src="./assets/back.png" v-on:click="navigate" />
      </div>
    </transition>
  </div>
</template>

<script>
import Project from "./components/project.vue";
import ProjectThumb from "./components/project-thumb.vue";
import myRouterLink from "./components/routerLink.vue";
import { setTimeout, clearTimeout } from "timers";

export default {
  name: "app",
  data: function() {
    return {
	  somethingIsOpen: false,
	  timer: null,
    };
  },
  components: {
    Project,
    ProjectThumb,
    myRouterLink
  },
  mounted() {
    console.log(this.$router.currentRoute.path);
    const path = this.$router.currentRoute.path;
    if (path.length > 1) this.somethingIsOpen = true;

    const div = document.getElementById("projectContainer");
    const divs = div.getElementsByTagName("div");
    const divArray = [];
    for (var i = 0; i < divs.length; i += 1) {
      // const l = Math.random() * (window.innerWidth / 4.0)
      // const r = Math.random() * (window.innerWidth / 4.0)
      // const t = Math.random() * 20
      // const b = Math.random() * 20
      divs[i].setAttribute("style", `margin: ${10}px ${10}px ${10}px ${10}px`);
      // divs[i].setAttribute("style", `margin: ${t}px ${r}px ${b}px ${l}px`);
    }
  },
  methods: {
    toggle(param) {
		clearTimeout(this.timer)
      	this.somethingIsOpen = param;
	},
	navigate() {	
		this.toggle(false)
		// give time to animate out
		this.timer = setTimeout(() => {this.$router.push('/')}, 500)	

		// this.$router.push('Home')
		// router.push(location, onComplete?, onAbort?)
	},
  },
	watch: {
    	'$route': function (to, from) {
			console.log(this.$router.history)
			/* console.log(to + " " + from)
				console.log(this.$router.history)
				console.log(this.$router.history.index)
				console.log(this.$router.history.stack)
			*/
			if (this.$router.history.current.name == 'Home') {
				this.navigate()
			}
			else {
				this.toggle(true)
			}
		// if the current history index isn't at the last position, use 'back' transition
		}
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
@import url("https://fonts.googleapis.com/css?family=Marcellus&display=swap");
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

#back {
  position: fixed;
  top: 20px;
  left: 20px;
  width: 50px;
  z-index: 2;
  mix-blend-mode: difference;
  cursor: pointer;
  transition: transform 0.2s;
}
#back:hover {
	transform: scale(1.1);
}

.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
body {
  background-color: black;
}
#test {
  width: 100%;
  top: 0px;
  position: fixed;
  right: 0px;
  height: 100vh;
  z-index: 2;
}

h1,
h2,
h3 {
  font-family: "Marcellus", serif;
}
h1 {
  font-size: 2.5em;
  font-size-adjust: inherit;
}
.projectContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: white;
  margin-top: 60px;
}
</style>
