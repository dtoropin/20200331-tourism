<template lang="pug">
  .wrapper
    Header
    Galery
    Feedback
    Statistic
    Footer
</template>

<script>
export default {
  components: {
    Header: () => import('./components/layout/Header'),
    Galery: () => import('./components/layout/Galery'),
    Feedback: () => import('./components/layout/Feedback'),
    Statistic: () => import('./components/layout/Statistic'),
    Footer: () => import('./components/layout/Footer')
  }
}
</script>