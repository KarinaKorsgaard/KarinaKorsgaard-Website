<template>
<main>

  <p>This game recently won both the people’s choice and an academy Gold lovie award. It can be downloaded on Play Store and App Store</p>

  <div class="downloadBadge">
    <a
      class="badge appStore"
      target="_blank"
      href="https://apps.apple.com/dk/app/kvante-karina-ar/id1471200027"
    >
      <img :src="require('../assets/Badge_AppStore.png')" />
    </a>
    <a
      class="badge playStore"
      target="_blank"
      href="https://play.google.com/store/apps/details?id=dk.sdu.kvantekarina"
    >
      <img :src="require('../assets/Badge_PlayStore.png')"/>
    </a>
  </div>
</main>
</template>

<style scoped>

/* DOWNLOAD BADGE */
.downloadBadge {
    display: flex;
    align-items: left;
    justify-content: left;
    margin-top: 20px;
	margin-bottom: 20px;
}
.downloadBadge .badge {
    margin-right: 10px;
    transition: all 0.1s ease-in;
}
.downloadBadge .badge:hover {
    transform: scale(1.05);
}
.downloadBadge .badge:last-child {
    margin-right: 0;
}
.downloadBadge .badge img {
    height: 50px;
}

</style>