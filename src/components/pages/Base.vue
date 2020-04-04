<template lang="pug">
  .wrapper__content
    Header
    Galery
    Feedback
    Statistic
    Map
    Footer
</template>

<script>
export default {
  components: {
    Header: () => import('../layout/Header'),
    Galery: () => import('../layout/Galery'),
    Feedback: () => import('../layout/Feedback'),
    Statistic: () => import('../layout/Statistic'),
    Map: () => import('../layout/Map'),
    Footer: () => import('../layout/Footer')
  }
}
</script>