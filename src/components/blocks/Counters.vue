<template lang="pug">
  .counters
    .counters__item.counters__item--outputs
      span.counters__score 2000
      span.counters__desc Lorem Ipsum
    .counters__item.counters__item--regions
      span.counters__score 23
      span.counters__desc Lorem Ipsum
    .counters__item.counters__item--peoples
      span.counters__score 19382
      span.counters__desc Lorem Ipsum
    .counters__item.counters__item--towns
      span.counters__score 120
      span.counters__desc Lorem Ipsum
</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';
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
}
</style>