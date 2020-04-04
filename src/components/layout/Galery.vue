<template lang="pug">
  section.galery.container
    .galery__content
      .galery__head
        h2.galery__title Gallery
        .galery__text
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, felis quis molestie sollicitudin, orci quam tincidunt diam, id rutrum dui urna sit amet quam.
      .galery__image
        Tiles
    .galery__aside
      .galery__pic(:style="{'background-image': 'url(' + require('images/content/layer-30.jpg') + ')'}")
</template>

<script>
export default {
  components: {
    Tiles: () => import('../blocks/Tiles')
  }
}
</script>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');
.galery {
  display: flex;
  justify-content: space-between;
  padding: 70px 0;
}
.galery__content {
  width: 75%;
  @include tablets {
    width: 100%;
  }
}
.galery__head {
  display: flex;
  justify-content: space-between;
  font-weight: 300;
  color: #000;
  margin-bottom: 55px;
}
.galery__title {
  font-size: 30px;
}
.galery__text {
  width: 75%;
  font-size: 13px;
  @include phones {
    width: 68%;
  }
}
.galery__aside {
  position: relative;
  width: 23%;
  background: #000;
  & > .galery__pic {
    position: absolute;
    top: -140px;
    bottom: 0;
    right: 0;
    left: 0;
  }
  @include tablets {
    display: none;
  }
}
</style>