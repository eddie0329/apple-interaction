<template>
  <section first-section>
    <MainLogo />
    <main-message>온전히 빠져들게 하는<br/>최고급 세라믹</main-message>
    <main-message>주변 맛을 느끼게 해주는<br/>주변 맛 허용 모드</main-message>
    <main-message>온종일 편안한<br/>맞춤형 손잡이</main-message>
    <main-message>새롭게 입가를<br/>찾아온 매혹</main-message>
  </section>
</template>

<script>
import MainLogo from "@/components/MainLogo";
import MainMessage from '@/components/MainMessage';

export default {
  name: "FirstSection",
  components: { MainLogo, MainMessage },
};
</script>

<style lang="less">
@import '~@/less/proj';
[first-section] {
  .pt(50vh);
}
</style>