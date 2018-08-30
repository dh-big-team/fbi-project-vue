<template v-loading.fullscreen.lock="$store.state.global.ajax_loading">
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside :style="{'width':$store.state.leftmenu.width}">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
  export default {
    name: 'testHome',
    data () {
      return {}
    },
    methods: {},
    created () {

    },
    mounted () {

    }
  }
</script>
<style>
  .el-header,
  .el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;

    height: 100%;
  }

  .el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 160px;
    height: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>