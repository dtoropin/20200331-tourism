<template lang="pug">
  .error
    .error__block
      span 404
      span page not found
    .error__link
      a(href='/') Goto main
</template>

<style lang="postcss" scoped>
.error {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.error__block {
  font-size: 2rem;
  margin-bottom: 20px;
  & > span:first-child {
    margin-right: 10px;
    &::after {
      content: '|';
      font-weight: 300;
      margin-left: 10px;
    }
  }
}
.error__link {
  color: #b7b7b7;
  transition: .3s color ease;
  &:hover {
    color: #5e5e5e;
  }
}
</style>