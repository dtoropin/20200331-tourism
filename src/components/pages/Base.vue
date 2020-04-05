<template lang="pug">
  .wrapper__content
    Header
    Galery
    Feedback
    Statistic
    Map
    Request
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
    Request: () => import('../layout/Request'),
    Footer: () => import('../layout/Footer')
  }
}
</script>