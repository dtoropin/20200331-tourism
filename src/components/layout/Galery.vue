<template lang="pug">
  section.galery.container
    .galery__content
      .galery__head
        h2.galery__title Gallery
        .galery__text
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dignissim, felis quis molestie sollicitudin, orci quam tincidunt diam, id rutrum dui urna sit amet quam.
      .galery__image
        .tiles
          .tiles__left
            .tiles__pic(:style="{'background-image': 'url(' + require('../../images/content/layer-29.jpg') + ')'}")
            .tiles__pic(:style="{'background-image': 'url(' + require('../../images/content/layer-27.jpg') + ')'}")
          .tiles__right
            .tiles__top
              .tiles__pic(:style="{'background-image': 'url(' + require('../../images/content/layer-28.jpg') + ')'}")
            .tiles__bottom
              .tiles__left
                .tiles__pic(:style="{'background-image': 'url(' + require('../../images/content/layer-26.jpg') + ')'}")
                .tiles__pic(:style="{'background-image': 'url(' + require('../../images/content/layer-24.jpg') + ')'}")
              .tiles__right
                .tiles__top
                  .tiles__pic(:style="{'background-image': 'url(' + require('../../images/content/layer-25.jpg') + ')'}")
    .galery__aside
      .tiles__pic(:style="{'background-image': 'url(' + require('../../images/content/layer-30.jpg') + ')'}")
</template>

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
.galery__aside {
  position: relative;
  width: 23%;
  background: #000;
  & > .tiles__pic {
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