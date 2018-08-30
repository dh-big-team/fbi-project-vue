<template v-loading.fullscreen.lock="$store.state.global.ajax_loading">
  <div class="home">
    <head-nav></head-nav>
    <div class="container">
      <left-menu></left-menu>
      <div class="right-content" :style="{left:$store.state.leftmenu.width}">
        <div class="content">
          <!--<tabs></tabs>-->
          <bread></bread>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import HeadNav from '../head-nav/HeadNav.vue'
  import LeftMenu from '../left-menu/LeftMenu.vue'
  import Bread from '../bread/Bread.vue'
  import Tabs from '../tabs/Tabs.vue'

  export default {
    name: 'home',
    components: {
      HeadNav, LeftMenu, Bread, Tabs
    }
  }
</script>
<style scoped lang='less'>
  .container {
    position: absolute;
    left: 0;
    top: 60px;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
  .right-content {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }

  .content {
    padding-left: 10px;
  }
</style>
