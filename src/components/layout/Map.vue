<template lang="pug">
  section.map
    .container
      .map__head
        h2.map__title Map of campaigns
      .map__area
        LMap(
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        )
          LTileLayer(
            :url="url"
            :attribution="attribution"
          )
          LMarker(:lat-lng="[59.936190, 30.383094]")
            LPopup
              span We are here
          LMarker(:lat-lng="[59.937190, 30.408880]")
            LPopup
              span Other place
</template>

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data: () => ({
    zoom: 13,
    center: latLng(59.93619, 30.383094),
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    currentZoom: 11.5,
    currentCenter: latLng(59.93619, 30.383094),
    mapOptions: {
      zoomSnap: 0.5,
      scrollWheelZoom: false
    }
  }),
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    }
  }
};
</script>

<style lang="postcss" scoped>
.map {
  background: url(../../images/bg-header.jpg) no-repeat center / cover;
  padding: 80px 0;
}
.map__head {
  display: flex;
  justify-content: center;
  margin-bottom: 29px;
}
.map__title {
  padding: 9px 17px;
  color: #ffffff;
  border: solid 1px #ffffff;
  font-size: 23px;
  font-weight: 300;
  text-transform: capitalize;
}
.map__area {
  width: 100%;
  height: 70vh;
  box-shadow: 0 0 10px #000;
}
</style>