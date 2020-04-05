<template lang="pug">
  .list__content
    .list__row(v-for='request in requests')
      h4 \#{{ request.id }}
      .list__footer
        .list__block
          span.list__count {{ request.name }}
          span.list__count {{ request.email }}
          span.list__count {{ request.phone }}
        .list__button
          button.list__btn(@click='del(request.id)') delete
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
    ...mapState("requests", {
      requests: state => state.requests
    })
  },
  methods: {
    ...mapActions("requests", ["getRequests"]),
    async del(id) {
      try {
        if (confirm("Удалить заявку #" + id + "?")) {
          const response = await axios.post("/delete/request/" + id);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          this.getRequests();
        }
      } catch (error) {
        this.error = error;
        setTimeout(() => (this.error = ""), 1500);
      }
    }
  },
  mounted() {
    this.getRequests();
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
}
.list__popup {
  position: fixed;
  max-width: 500px;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 50px;
  color: #000;
  background: #ff7171;
  border-radius: 7px;
}
</style>