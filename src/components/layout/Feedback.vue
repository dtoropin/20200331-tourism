<template lang="pug">
  section.feedback
    .feedback__block.container
      .feedback__head
        h2.feedback__title Lorem ipsum
      .feedback__text
        p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<style lang="postcss" scoped>
.feedback {
  background: url(../../images/bg-feedback.jpg) no-repeat center / cover;
  padding: 95px 0;
}
.feedback__block {
  color: #fff;
  max-width: 620px;
}
.feedback__head {
  display: flex;
  justify-content: center;
  margin-bottom: 29px;
}
.feedback__title {
  padding: 9px 17px;
  border: solid 1px #ffffff;
  font-size: 23px;
  font-weight: 300;
  text-transform: capitalize;
}
.feedback__text {
  line-height: 2;
  letter-spacing: 0.52px;
  text-align: center;
  font-size: 13px;
  font-weight: 300;
}
</style>