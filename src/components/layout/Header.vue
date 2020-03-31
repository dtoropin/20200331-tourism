<template lang="pug">
  .header
    span.logo Tourism.
    .container.header__content
      .welcome
        span.welcome__before EXPLORE THE
        h1.welcome__title DEEP FOREST
        .welcome__text
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</template>

<style lang="postcss" scoped>
.header {
  background: url(../../images/bg-header.jpg) no-repeat center / cover;
  color: #fff;
  padding-top: 82px;
}
.logo {
  display: block;
  font-size: 21px;
  text-align: center;
}
.header__content {
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.welcome {
  width: 55%;
}
.welcome__before {
  font-size: 23px;
  color: #b7b7b7;
  font-weight: bold;
  line-height: 23px;
}
.welcome__title {
  font-size: 63px;
  font-weight: bold;
  line-height: 63px;
  margin-bottom: 19px;
}
.welcome__text {
  font-weight: 400;
  letter-spacing: 0.84px;
}
</style>