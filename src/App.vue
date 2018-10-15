<template>
  <div id="app">
    <localInfo />
    <seaInfo />
    <dailyForecast />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import localInfo from "./components/local-info.vue";
import seaInfo from "./components/sea-info.vue";
import dailyForecast from "./components/daily-forecast.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    localInfo,
    seaInfo,
    dailyForecast
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
