<template lang="pug">
  .tiles
    .tiles__left
      .tiles__pic(:style="{'background-image': 'url(' + require('images/content/layer-29.jpg') + ')'}")
      .tiles__pic(:style="{'background-image': 'url(' + require('images/content/layer-27.jpg') + ')'}")
    .tiles__right
      .tiles__top
        .tiles__pic(:style="{'background-image': 'url(' + require('images/content/layer-28.jpg') + ')'}")
      .tiles__bottom
        .tiles__left
          .tiles__pic(:style="{'background-image': 'url(' + require('images/content/layer-26.jpg') + ')'}")
          .tiles__pic(:style="{'background-image': 'url(' + require('images/content/layer-24.jpg') + ')'}")
        .tiles__right
          .tiles__top
            .tiles__pic(:style="{'background-image': 'url(' + require('images/content/layer-25.jpg') + ')'}")
</template>

<style lang="postcss" scoped>
@import url('../../styles/mixins.pcss');
.tiles {
  display: flex;
  height: 507px;
  @include phones {
    height: 400px;
  }
}
.tiles__left {
  width: 45%;
  height: 100%;
  & > .tiles__pic:first-child {
    height: 40%;
  }
  & > .tiles__pic:last-child {
    height: 60%;
  }
  @include phones {
    width: 100%;
  }
}
.tiles__right {
  width: 55%;
  height: 100%;
  @include phones {
    width: 100%;
  }
}
.tiles__top {
  height: 50%;
  & > .tiles__pic {
    height: 100%;
  }
}
.tiles__bottom {
  height: 50%;
  display: flex;
  & .tiles__top {
    height: 100%;
  }
}
.tiles__pic {
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>