<template>
  <div id="app">
    <localInfo />
    <seaInfo />
    <dailyForecast />
    <galleryCarosel />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import localInfo from "./components/local-info.vue";
import seaInfo from "./components/sea-info.vue";
import dailyForecast from "./components/daily-forecast.vue";
import galleryCarosel from "./components/gallery-carosel.vue"


export default {
  name: "app",
  components: {
    HelloWorld,
    localInfo,
    seaInfo,
    dailyForecast,
    galleryCarosel
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");

body {
  background-color: #56b4d3;
  font-family: "Roboto Condensed";
}
#app {
  font-size: 13px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: auto;
}
</style>
