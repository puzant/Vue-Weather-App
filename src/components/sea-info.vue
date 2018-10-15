<template>
    <div class="second-wrapper">
        <h1>Sea Forecast Report</h1>
        <hr>
    <div class="data-contianer">
        <div class="info-text">
          <p><img src="https://png.icons8.com/ios/50/ffffff/wind.png"> Wind Speed: </p>
          <p><img src="https://png.icons8.com/carbon-copy/50/ffffff/windy-weather.png"> Wind Degree:  </p>
          <p><img src="https://png.icons8.com/ios/50/ffffff/north-direction.png"> Wind Direction: </p>
          <p><img src="https://png.icons8.com/ios/50/ffffff/humidity.png"> humidity:  </p>
          <p><img src="https://png.icons8.com/dotty/50/ffffff/pressure.png"> presuure: </p>
          <p><img src="https://png.icons8.com/metro/50/ffffff/rain.png"> Cloud: </p>
        </div>
    <div class="data">
        <p>{{info.current.wind_mph}}.MPH</p>
        <p>{{info.current.wind_degree}} &#8451;</p>
        <p>{{info.current.wind_dir}}</p>
        <p>{{info.current.humidity}}</p>
        <p>{{info.current.pressure}}</p>
        <p>{{info.current.cloud}}</p>
        <p>{{info.current.vis_km}}</p>
    </div>
</div>
</div>

</template>


<script>
import axios from "axios";

export default {
  name: "sea-info",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get(
        "http://api.apixu.com/v1/current.json?key=60dee63acea743c2a83192218181310&q=Paris"
      )
      .then(res => (this.info = res.data));
  }
};
</script>

<style scoped>
.second-wrapper {
  background-color: rgba(0, 0, 0, 0.4);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000, 0, endColorstr=#66000000, 0);
  zoom: 1;
  width: 320px;
  padding: 1.1rem;
  border-radius: 4px;
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
  margin: 10px;
}

.second-wrapper h1 {
  text-align: center;
}

.data-contianer {
  display: flex;
  justify-content: space-around;
}

.data-contianer .data {
  line-height: 26px;
}

.info-text img {
  height: 20px;
}

span {
  font-size: 1.5rem;
}
</style>
