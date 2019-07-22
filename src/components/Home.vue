<template>
  <div id="home">
	

    <section class="projectContainer" id="projectContainer">
		 <div id="myName">
			 <h1>Karina Korsgaard</h1>
			 <div class = "WIP">Site is work in progress</div>
		 </div>
		
		 
      <my-router-link id="Kvante" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="SeniorAI" v-on:click.native="toggle(true)"></my-router-link>
      <my-router-link id="Erdi" v-on:click.native="toggle(true)"></my-router-link>
     <!-- <my-router-link id="Sydney" v-on:click.native="toggle(true)"></my-router-link>-->
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


  </div>
</template>

<script>
import Project from "../components/project.vue";
import ProjectThumb from "../components/project-thumb.vue";
import myRouterLink from "../components/routerLink.vue";
import { setTimeout, clearTimeout } from "timers";

export default {
  name: "home",
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
#myName {
	width: 332px;
	margin: 10px;
}
#myName h1{
	margin-left:15px;
}
.WIP {
	width: 300px;
	height: 50px;
	border: 1px solid black;
	background-color: black;
	color:white;
	text-align: center;
	line-height: 50px;
	margin-top:-40px;
	margin-left:15px;
}

#test {
  width: 100%;
  top: 0px;
  position: fixed;
  right: 0px;
  height: 100vh;
  z-index: 2;
}

.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
body {

}


h1,
h2,
h3 {
  font-family: 'Poppins', sans-serif;
}
h1{
	text-align: left;
	font-weight: bolder;
	font-size: 3.5em;
}
.projectContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#app {
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
  margin-top: 60px;
  
}

.link{
	text-decoration: none !important;
	cursor: pointer;
}
.link:hover {
	color:black;
}
</style>
