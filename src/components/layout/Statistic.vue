<template lang="pug">
  section.statistic
    .container
      h2.statistic__title Statistics
      .statistic__description
        h3.statistic__head Did You Know?
        .statistic__text
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet suscipit leo. Sed lectus odio, accumsan vitae suscipit in, posuere et orci. Nunc a feugiat arcu. Proin fringilla lectus non finibus malesuada. In in nulla augue. Integer id lacus ultrices, pharetra tellus a, pulvinar lorem. Pellentesque quis pretium nulla, sit amet efficitur justo. Morbi luctus vehicula diam, vitae facilisis libero ultrices eu.
      Counters
</template>

<script>
export default {
  components: {
    Counters: () => import('../blocks/Counters')
  }
}
</script>

<style lang="postcss" scoped>
.statistic {
  padding: 73px 0 89px;
  font-weight: 300;
  color: #000;
}
.statistic__title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 70px;
}
.statistic__description {
  margin-bottom: 48px;
}
.statistic__head {
  font-size: 30px;
  margin-bottom: 19px;
}
.statistic__text {
  ine-height: 1.79;
  letter-spacing: 0.56px;
  text-align: justify;
}
</style>