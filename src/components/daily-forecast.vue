<template>
    <div class="forecast-wrapper">
        <div class="con-1">
            <div class="sec-1">
             <p><img src="https://png.icons8.com/ios/50/ffffff/sun.png"> Maximum tempreture: </p>
             <p><img src="https://png.icons8.com/ios/50/ffffff/winter.png"> Minimum tempreture: </p>
             <p><img src="https://png.icons8.com/ios/50/ffffff/moisture-filled.png"> Total precipitation: </p>
             <p><img src="https://png.icons8.com/dotty/50/ffffff/do-not-expose-to-sunlight.png"> Ultra violet: </p>
            </div>
            <div class="sec-2">
                <p>{{info.forecast.forecastday[0].day.maxtemp_c}}</p>
                <p>{{info.forecast.forecastday[0].day.mintemp_c}}</p>
                <p>{{info.forecast.forecastday[0].day.totalprecip_mm}}</p>
                <p>{{info.forecast.forecastday[0].day.uv}}</p>
            </div>

        </div>

          <div id="verticle-line"></div>

        <div class="con-2">
            <div class="sec-3">
              <p><img src="https://png.icons8.com/ios-glyphs/50/ffffff/summer.png"> Sunrise: </p>
              <p><img src="https://png.icons8.com/windows/50/ffffff/sunset.png"> Sunset: </p>
              <p><img src="https://png.icons8.com/android/50/ffffff/bright-moon.png"> Moon rise: </p>
              <p><img src="https://png.icons8.com/ios/50/ffffff/full-moon.png"> Moon set: </p>
        </div>
            <div class="sec-4">
              <p>{{info.forecast.forecastday[0].astro.sunrise}}</p>
              <p>{{info.forecast.forecastday[0].astro.sunset}}</p>
              <p>{{info.forecast.forecastday[0].astro.moonrise}}</p>
              <p>{{info.forecast.forecastday[0].astro.moonset}}</p>
        </div>

    </div>


    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "daily-forecast",
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get(
        "https://api.apixu.com/v1/forecast.json?key=60dee63acea743c2a83192218181310&q=Paris"
      )
      .then(res => (this.info = res.data));
  }
};
</script>


<style scoped>
.forecast-wrapper {
  width: 700px;
  background-color: rgba(0, 0, 0, 0.4);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000, 0, endColorstr=#66000000, 0);
  zoom: 1;
  padding: 1.2rem;
  border-radius: 4px;
  font-weight: 600;
  color: #fff;
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media only screen and (max-width: 720px) {
  .forecast-wrapper {
    display: flex;
    justify-content: center;
    width: 305px;
  }

  .forecast-wrapper #verticle-line {
    display: none;
  }
}

.con-1,
.con-2 {
  display: flex;
  width: 300px;
  justify-content: space-evenly;
}

img {
  height: 20px;
}

.sec-2,
.sec-4 {
  line-height: 26px;
}

#verticle-line {
  width: 1px;
  min-height: 100px;
  background: #fff;
}
</style>
