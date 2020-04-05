<template lang="pug">
  .list__content
    button.list__btn.list__btn--add(@click='addMarker') add marker
    .list__row(v-for='marker in markers')
      h4 \#{{ marker.id }}
      .list__footer
        .list__block
          span.list__count "{{ marker.name }}"
          span.list__count ({{ marker.lat }}, {{ marker.lng }})
        .list__button
          button.list__btn(@click='editMarker(marker)') edit
          button.list__btn(@click='deleteMarker(marker.id)') delete
    .list__popup(v-show='error') {{ error }}
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    error: ""
  }),
  computed: {
    ...mapState("marker", {
      markers: state => state.markers
    })
  },
  methods: {
    ...mapActions("marker", ["getMarkers"]),
    ...mapActions("base", ["setEdit", "setIsEditedMarker"]),
    editMarker(marker) {
      this.setEdit(marker);
      this.setIsEditedMarker(true);
    },
    async deleteMarker(id) {
      try {
        if (confirm("Удалить маркер #" + id + "?")) {
          const response = await axios.post("/delete/marker/" + id);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          this.getMarkers();
        }
      } catch (error) {
        this.error = error;
        setTimeout(() => (this.error = ""), 1500);
      }
    },
    addMarker() {
      this.setIsEditedMarker(true);
    }
  },
  mounted() {
    this.getMarkers();
  }
};
</script>

<style lang="postcss" scoped>
.list__content {
  position: relative;
}
.list__row {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
  &:last-child {
    border: none;
    margin-bottom: 0;
  }
  & h3 {
    font-weight: 500;
    margin-bottom: 10px;
  }
  & p {
    font-weight: 300;
    margin-bottom: 30px;
  }
}
.list__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list__count {
  display: inline-block;
  min-width: 50px;
  font-weight: 500;
  & + .list__count {
    margin-left: 20px;
  }
}
.list__btn {
  padding: 7px 15px;
  font-weight: 300;
  border-radius: 3px;
  transition: 0.3s background-color ease;
  & + .list__btn {
    margin-left: 7px;
  }
  &:hover {
    background: #bebebe;
  }
  &--add {
    position: absolute;
    top: -40px;
    right: 10px;
  }
}
</style>