<template>
  <div main-message>
    <p><slot /></p>
  </div>
</template>

<script>
export default {
  name: "MainMessage",
};
</script>

<style lang="less">
@import '~@/less/proj';

[main-message] {
  .flex; .flex-ai; .flex-jc;
  > p { .bold; .tc; }
}
</style>