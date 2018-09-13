<template>
  <div id="app">
    <transition name="bounce">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data () {
      return {}
    },
    methods: {
      onTestRestFulApi(){
        this.$$api_test_getArticle({
          pathParams:{
            id:1
          },
          fn:()=>{}
        })
      },
      onUpdateTabs() {
        this.$store.dispatch('update_tabs', {
          route: this.$route
        })
      },
      onUpdateRouters(){
        let routes = this.$store.state.router.routerMenu
        if ((!this.$store.state.router.isAutoRouter)&&routes.length>0) {
          this.$router.addRoutes(routes)
          this.$router.options.routes.push(routes)
          this.$store.dispatch('set_is_auto_router', true)
        }
      },
      init () {
        this.onUpdateTabs()
        this.onUpdateRouters()
      }
    },
    mounted () {
      this.init()
    },
    watch: {
      $route (to, from) {
        this.init()
      }
    }
  }
</script>

<style lang="less">
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  .bounce-enter-active {
    animation: bounce-in 0.5s;
    -webkit-animation: bounce-in 0.5s;
  }

  .bounce-leave-active {
    animation: bounce-out 0.2s;
    -webkit-animation: bounce-out 0.2s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce-out {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0);
    }
  }
</style>
