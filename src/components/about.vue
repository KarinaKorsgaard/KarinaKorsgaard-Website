<template>
  <main>
    <section class="intro">
      <p>
        <strong>I am a 30 year old technology agnostic with a a background in design and ux currently looking for a job</strong>
        <br />
        <br />I've worked with both native mobile game development, front-end and native desktop apps for interactive installations. Feel free to send me an email or reach out via linkedin.
      </p>
    </section>
    <section class="links">
      <a target="_blank" href="https://github.com/KarinaKorsgaard">Github</a>

      <a target="_blank" href="https://linkedin.com/in/karinakorsgaardjensen/">LinkedIn</a>

      <a
        target="_blank"
        href="https://docs.google.com/document/d/1F2qYBSq3falf_QIsvdduFn6nfGdnASKEJ2Hz7Nf4040/"
      >CV</a>
    </section>

    <section>
      <h3>Contact info:</h3>
      <address>
        <p>kkorsgaardjensen@gmail.com</p>
      </address>
    </section>
  </main>
</template>

<script>
export default {
  name: "About",
  data: function() {
    return {};
  },
  mounted() {},
  props: {},
  components: {},
  methods: {}
};
</script>

<style lang="scss" scoped>
.intro {
  width: 60%;
  min-width: 200px;
  max-width: 450px;
  background: black;
  padding: 10%;
  color: white;
  @include small {
	  width: 80%;
	  margin: 30px auto;
  }
}

section {
  margin-bottom: 50px;
}

.links {
  a {
    display: block;
    font-size: 3em;
    color: black;
  }
}
</style>
