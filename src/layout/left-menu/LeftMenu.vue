<template>
  <div class="left" :style="{'height':win_size.height,'width':$store.state.leftmenu.width}" id='admin-left'>
    <div id='left-menu'>
      <el-row class='tac' v-for="route in $router.options.routes" :key='route.path' v-if='!route.hidden && $route.matched.length && $route.matched[0].path===route.path'>

        <el-menu class="el-menu-vertical-demo" :default-active="$route.path" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
          <!-- v-if="!item.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[route.path+'/'+item.path]) || $store.state.user.userinfo.access_status!==1)" -->
          <template v-for="item in route.children" v-if="!item.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[route.path+'/'+item.path]) || $store.state.user.userinfo.access_status!==1)">
            <el-submenu :index="item.path" :key="item.path">
              <template slot="title">
                <el-tooltip class="item" effect="dark" placement="right" :disabled="$store.state.leftmenu.menu_flag" :content="item.name">
                  <i :class="'fa fa-'+item.icon"></i>
                </el-tooltip>
                <span class='menu-name' v-if="$store.state.leftmenu.menu_flag">{{item.name}}
                  <!-- {{route.path+'/'+item.path}} -->
                </span>
              </template>

              <!-- v-if="!child.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[route.path+'/'+item.path+'/'+child.path]) || $store.state.user.userinfo.access_status!==1)" -->
              <el-menu-item v-for='child in item.children' :key='child.path' v-if="!child.hidden && (($store.state.user.userinfo.access_status===1 && $store.state.user.userinfo.web_routers[route.path+'/'+item.path+'/'+child.path]) || $store.state.user.userinfo.access_status!==1)" :style="{'padding-left':$store.state.leftmenu.menu_flag? '40px' : '23px'}" :index='$store.state.router.headerCurRouter+"/"+item.path+"/"+child.path'>
                <el-tooltip class="item" effect="dark" placement="right" :disabled="$store.state.leftmenu.menu_flag" :content="child.name">
                  <i :class="'fa fa-'+child.icon"></i>
                </el-tooltip>
                <span class='menu-name' v-if="$store.state.leftmenu.menu_flag">{{child.name}}
                  <!-- {{route.path+'/'+item.path+'/'+child.path}} -->
                </span>
              </el-menu-item>
            </el-submenu>
          </template>
        </el-menu>

      </el-row>
      <div class="toggle-menu" @click='toggleMenu' :style='{left:$store.state.leftmenu.width}'>
        <i :class='[{"el-icon-arrow-left":$store.state.leftmenu.menu_flag},{"el-icon-arrow-right":!$store.state.leftmenu.menu_flag}]'></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-menu',
  data() {
    return {
      menu_list: [],
      win_size: {
        height: ''
      }
    }
  },
  methods: {
    setSize() {
      this.win_size.height = this.$$lib_$(window).height() - 50 + 'px'
    },
    toggleMenu() {
      this.$store.dispatch(
        this.$store.state.leftmenu.menu_flag
          ? 'set_menu_close'
          : 'set_menu_open'
      )
    },
    updateCurMenu(route) {
      route = route || this.$route
      if (route.matched.length) {
        var rootPath = route.matched[0].path
        var fullPath = route.path
        this.$store.dispatch('set_cur_route', {
          rootPath,
          fullPath
        })
        var routes = this.$router.options.routes
        for (var i = 0; i < routes.length; i++) {
          if (routes[i].path === rootPath && !routes[i].hidden) {
            this.menu_list = routes[i].children
            break
          }
        }
      } else {
        this.$router.push('/404')
      }
    }
  },
  created() {
    this.setSize()
    this.$$lib_$(window).resize(() => {
      this.setSize()
    })
    this.updateCurMenu()
  },
  mounted() {
    //console.log(this.$store.state.user.userinfo.access)
    console.log(this.$router.options.routes)
    console.log(this.$route.matched)
  },
  watch: {
    $route(to, from) {
      this.updateCurMenu(to)
    }
  }
}
</script>

<style scoped lang='less'>
  @import url(./LeftMenu.less);
</style>
