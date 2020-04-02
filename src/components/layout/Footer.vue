<template lang="pug">
  footer.footer
    .footer__content
      .footer__feedback
        .footer__head
          h2.footer__title Lorem ipsum
        .footer__text
          p Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      .footer__video
        Video
      .footer__info
        span.logo Tourism.
        span &copy; {{ new Date().getFullYear() }}
</template>

<script>
export default {
  components: {
    Video: () => import('../blocks/Video')
  }
}
</script>

<style lang="postcss" scoped>
.footer {
  background: url('../../images/bg-footer.jpg') no-repeat center / cover;
  padding: 117px 0 105px;
}
.footer__content {
  max-width: 780px;
  width: 95%;
  margin: 0 auto;
  color: #fff;
}
.footer__feedback {
  max-width: 620px;
  margin: 0 auto 90px;
}
.footer__head {
  display: flex;
  justify-content: center;
  margin-bottom: 29px;
}
.footer__title {
  padding: 9px 17px;
  border: solid 1px #ffffff;
  font-size: 23px;
  font-weight: 300;
  text-transform: capitalize;
}
.footer__text {
  line-height: 2;
  letter-spacing: 0.52px;
  text-align: center;
  font-size: 13px;
  font-weight: 300;
}
.footer__video {
  max-width: 780px;
  margin-bottom: 116px;
}
.footer__info {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  & > span + span {
    margin-left: 10px;
  }
}
.logo {
  display: block;
  font-size: 21px;
  text-align: center;
}
</style>