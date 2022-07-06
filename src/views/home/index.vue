<!--  
 * home页面
 * @author: lwy
 * @since: 2022-07-06
 * index.vue
-->
<template>
  <div class="home-container">
    <!--适配电脑-->
    <header
      :md="24"
      :xl="24"
      :lg="24"
      class="hidden-sm-and-down computer-header"
    >
      <div class="logo">
        <img src="../../assets/img/logo/trypto_logo_blue.png" alt="" />
      </div>
      <nav></nav>
    </header>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
</script>
<style lang="scss" scoped>
.home-container {
  width: 100%;
  height: 100vh;
  background: url('../../assets/img/bg/banner_bg.jpeg') no-repeat;
  color: #fff;
  .computer-header {
    width: 100%;
  }
}
</style>
