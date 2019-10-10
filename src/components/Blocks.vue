<template></template>

<script>
import * as Matter from "matter-js";
export default {
  name: "blocks",

  data: function() {
    return {
      blocks: [],
      Engine: Matter.Engine,
      World: Matter.World,
      Body: Matter.Body,
      Bodies: Matter.Bodies,
      Events: Matter.Events,
      Constraint: Matter.Constraint,
      Composite: Matter.Composite,
      Composites: Matter.Composites,
      Bounds: Matter.Bounds,
      Mouse: Matter.Mouse,
      MouseConstraint: Matter.MouseConstraint,
      Render: Matter.Render,
      Vertices: Matter.Vertices,
      Common: Matter.Common,
      Runner: Matter.Runner
    };
  },
  components: {},
  mounted() {}
};
</script>

<style scoped>
</style>