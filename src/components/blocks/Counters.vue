<template lang="pug">
  .counters
    .counters__item(v-for='count in counts')
      span.counters__score {{ count.number }}
      span.counters__desc {{ count.name }}
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("statistic", {
      counts: state => state.statistic
    })
  },
  methods: {
    ...mapActions("statistic", ["getStatistic"])
  },
  mounted() {
    this.getStatistic();
  }
};
</script>

<style lang="postcss" scoped>
@import "../../styles/mixins.pcss";
.counters {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @include tablets {
    grid-template-columns: 1fr 1fr;
  }
  @include phones {
    grid-template-columns: 1fr;
  }
}
.counters__item {
  text-align: center;
  margin-bottom: 48px;
}
.counters__score {
  display: block;
  font-size: 28px;
  font-weight: 500;
}
.counters__desc {
  font-size: 17px;
  text-transform: capitalize;
}
</style>