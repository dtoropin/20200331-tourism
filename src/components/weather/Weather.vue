<template lang="pug">
  .weather
    .weather__card
      h4.weather__city(v-show="city") {{ city }}
      span.weather__caption(v-show="curTempDisplay") {{ weatherMain }}: {{ weatherDesc }}
      h2.weather__temperature(v-show="curTempDisplay")
        i.wi(:class="[classWI]")
        span {{ curTempDisplay }}°C
    .weather__footer
      small Provided: <a target="_blanc" href="http://openweathermap.org/">OpenWeatherMap</a>
</template>

<script>
import "./weather-icons.pcss";
import axios from "axios";
import weatherIcons from './icons.json';
export default {
  data: () => ({
    latitude: 59.894444,
    longitude: 30.264168,
    city: "Hello from St.Petersburg",
    curTemp: null,
    displayMode: "CELSIUS",
    // displayMode: "FARENGEIT",
    dataObj: null,
    weatherMain: "Fine",
    weatherDesc: "Clear day"
  }),
  computed: {
    classWI() {
      if (this.dataObj != null) {
        const code = this.dataObj.weather[0].id;
        const prefix = 'wi-';
        let icon = weatherIcons[code].icon;
        if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
          icon = "day-" + icon;
        }
        return prefix + icon;
      }
      return "";
    },
    curTempDisplay() {
      if (this.curTemp != null) {
        if (this.displayMode == "CELSIUS") {
          return (this.curTemp - 273.15).toFixed(1);
        } else {
          return ((this.curTemp * 9) / 5 - 459.67).toFixed(1);
        }
      } else {
        return null;
      }
    }
  },
  methods: {
    async getWeather() {
      const reqURL =
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        this.latitude +
        "&lon=" +
        this.longitude +
        "&APPID=99b4a77368d70864320c29c68544e0ed";
      try {
        const response = await axios.get(reqURL);
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        this.dataObj = response.data;
        this.curTemp = this.dataObj.main.temp;
        this.city = this.dataObj.name;
        this.weatherMain = this.dataObj.weather[0].main;
        this.weatherDesc = this.dataObj.weather[0].description;
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getWeather();
  }
};
</script>

<style lang="postcss" scoped>
.weather {
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #e5e2ca;
  color: #4d4d4d;
  border-radius: 7px;
}
.weather__card {
  position: relative;
  text-align: center;
  border-radius: 7px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.13), 0 1px 5px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 5px;
  padding: 15px;
}
.weather__city {
  font-size: 24px;
  font-weight: 400;
}
.weather__caption {
  display: block;
  margin-bottom: 10px;
  color: #aaaaaa;
}
.weather__temperature {
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-style: normal;
    margin-top: 7px;
    margin-right: 10px;
    text-shadow: rgba(238, 238, 238, 0.5) 1px 1px 0px, rgb(112, 112, 112) 1px 1px 0px;
  }
}
.weather__footer {
  font-size: 13px;
  a {
    color: #405cff;
    transition: 0.3s color ease;
    &:hover {
      color: #273aa3;
    }
  }
}
</style>