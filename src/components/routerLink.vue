<template>
<div>
  <router-link class="link"
    :to="{ name: 'Projects', params: {identifier: id}, props: {identifier: id} } "
  >
    <project-thumb :identifier=id />
  </router-link>

</div>
</template>

<script>
import ProjectThumb from "../components/project-thumb.vue"

export default {
  name: "MyRouterLink",
  data: function() {
    return {};
  },
  props: {
    id: String
  },
  components: {
    ProjectThumb
  },
};
</script>

<style scoped>


</style>
