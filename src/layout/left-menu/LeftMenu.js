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
    if (this.$store.state.router.headerCurRouter === '/index') {
      this.$store.dispatch('set_menu_hide')
    }
  },

  mounted() {
    // console.log(this.$store.state.user.userinfo.access);
    //console.log('-------routes=', this.$router.options.routes)
    //console.log('-------matched=', this.$route.matched)
    //console.log('-------url=', this.$store.state.router.headerCurRouter)
    //console.log('-------token=', this.$store.getters.getToken)
  },

  watch: {
    $route(to, from) {
      this.updateCurMenu(to)

      if (to.path === '/index') {
        this.$store.dispatch('set_menu_hide')
      } else {
        this.$store.dispatch('set_menu_show')
        console.log(this.$store.state.leftmenu.show_flag)
      }
    }
  }
}
