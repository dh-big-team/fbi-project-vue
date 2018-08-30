<template>
  <div class="left" :style="{'height':win_size.height,'width':$store.state.leftmenu.width}" id='admin-left'>
    <div id='left-menu'>
      <template v-for="route in $store.state.user.userinfo.menuList" v-if='$route.matched.length && $route.matched[0].path===route.menuUrl'>
        <el-menu class="el-menu-vertical-demo" :key="route.menuId" :style="{'border-right':'none'}" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" :default-active="$route.path" unique-opened router>
          <template v-for="item in route.childList">
            <el-submenu :index="item.menuUrl" :key="item.menuId">
              <template slot="title">
                <el-tooltip class="item" effect="dark" placement="right" :disabled="$store.state.leftmenu.menu_flag" :content="item.menuName">
                  <i :class="'fa fa-'+item.menuIco"></i>
                </el-tooltip>
                <span class='menu-name' v-if="$store.state.leftmenu.menu_flag">{{item.menuName}}</span>
              </template>
              <el-menu-item v-for='child in item.childList' :index='child.menuUrl' :key='child.menuId' :style="{'padding-left':$store.state.leftmenu.menu_flag? '40px' : '23px'}">
                <el-tooltip class="item" effect="dark" placement="right" :disabled="$store.state.leftmenu.menu_flag" :content="child.menuName">
                  <i :class="'fa fa-'+child.menuIco"></i>
                </el-tooltip>
                <span class='menu-name' v-if="$store.state.leftmenu.menu_flag">{{child.menuName}}
                  <!-- {{route.path+'/'+item.path+'/'+child.path}} -->
                </span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>

      </template>
      <div class="toggle-menu" @click='toggleMenu' :style='{left:$store.state.leftmenu.width}'>
        <i :class='[{"el-icon-arrow-left":$store.state.leftmenu.menu_flag},{"el-icon-arrow-right":!$store.state.leftmenu.menu_flag}]'></i>
      </div>
    </div>
  </div>
</template>

<script>
  import LeftMenu from './LeftMenu.js'

  export default LeftMenu
</script>

<style scoped lang='less'>
  @import url(./LeftMenu.less);
</style>
