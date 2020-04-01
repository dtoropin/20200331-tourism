<template lang="pug">
  .wrapper__content
    Header
    Galery
    Feedback
    Statistic
    Footer
</template>

<script>
export default {
  components: {
    Header: () => import('../layout/Header'),
    Galery: () => import('../layout/Galery'),
    Feedback: () => import('../layout/Feedback'),
    Statistic: () => import('../layout/Statistic'),
    Footer: () => import('../layout/Footer')
  }
}
</script>