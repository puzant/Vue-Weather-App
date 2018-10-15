<template>
    <div class="wrapper animated fadeIn">
        <div class="local-report">
            <h1 id="title">Local Weather Report</h1>
            <hr>

        <div class="info-wrapper">
            <div class="img-wrapper">
                <img v-bind:src="info.current.condition.icon" alt="">
            </div>
            <div class="geo-info">
                <p id="location">{{info.location.name}}</p>
                <p id="status">{{info.current.condition.text}}</p>
            </div>
        </div>

            <p id="temp_c"><img src="https://png.icons8.com/ios/50/ffffff/temperature.png"> Tempreture: {{info.current.temp_c}} &#8451;</p>
            <p id="temp_f"><img src="https://png.icons8.com/ios/50/ffffff/temperature.png"> Tempreture: {{info.current.temp_f}} &#8457;</p>
            <p><img src="https://png.icons8.com/cotton/50/ffffff/time.png"> Local time: {{info.location.localtime}}</p>
        </div>
    </div>
</template>


<script>
import axios from 'axios';

export default {
    name:'local-info',
    data () {
        return {
            info: null
        }
    },
    mounted() {
        axios
        .get('http://api.apixu.com/v1/current.json?key=60dee63acea743c2a83192218181310&q=Paris')
        .then(res => (this.info = res.data))
    }
}
</script>

<style scoped>
.wrapper  {
    background-color: rgba(0,0,0,.4);
    filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#66000000, 0, endColorstr=#66000000, 0);
    zoom:1;
    width: 320px;
    padding: 1.1rem;
    border-radius:4px;
    font-weight:600;
    color:#fff;
    font-size:1rem;
    margin: 10px;
}

.wrapper .local-report > p {
    font-size: 1.2rem;
}

.wrapper .local-report img {
    height: 20px;
}

.wrapper .local-report #title {
    text-align: center;
}

.wrapper .info-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 1.3rem;

}

.wrapper .info-wrapper .img-wrapper img {
    height: 8rem;
}
</style>
