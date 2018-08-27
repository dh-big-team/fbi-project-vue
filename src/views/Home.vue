
<template>
  <div class="home">
    <img src="../assets/img/logo.png">
    <h3>{{ num }}</h3>
    <demo></demo>
    <HelloWorld msg="Welcome to Your Vue.js App"></HelloWorld>
  </div>
</template>

<script>
  import Demo from '@/components/demo'
  import HelloWorld from './HelloWorld.vue'

  export default {
    name: 'home',

    // Assets
    components: {
      HelloWorld,
      Demo
    },

    // Composition
    mixins: [],

    // Data
    data() {
      return {
        num: 0
      }
    },
    model: {},
    props: {},
    computed: {},
    methods: {},
    watch: {},

    // Lifecycle Hooks
    beforeCreate() {},
    created() {
      const timer = setInterval(() => {
        this.num++
      }, 1000)
      //页面销毁前清除定时器
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
        console.log('timer clear.')
      })
    },
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    activated() {},
    deactivated() {},
    beforeDestroy() {},
    destroyed() {},
    errorCaptured() {}
  }
</script>
