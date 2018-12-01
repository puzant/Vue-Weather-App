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
              <p><img src="https://png.icons8.com/ios-glyphs/50/ffffff/summer.png" @error="handleError" alt=""> Sunrise: </p>
              <p><img src="https://png.icons8.com/windows/50/ffffff/sunset.png" @error="handleError" alt=""> Sunset: </p>
              <p><img src="https://png.icons8.com/android/50/ffffff/bright-moon.png" @error="handleError" alt=""> Moon rise: </p>
              <p><img src="https://png.icons8.com/ios/50/ffffff/full-moon.png" @error="handleError" alt=""> Moon set: </p>
              <div v-show="isImageBroken" class="custome-placeholder">unable to load the images</div>
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
      info: null,
      isImageBroken: false
    };
  },
  methods: {
    handleError: function(e) {
      this.isImageBroken = true;
      e.target.src = 'https://img.icons8.com/ios-glyphs/40/ffffff/full-image.png'
      e.target.alt = 'unable to load the image'
    }
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

.custome-placeholder {
  background-color: rgb(247, 49, 49);
  color: #fff;
  padding: 10px;
  border-radius: 5px;
}
</style>
