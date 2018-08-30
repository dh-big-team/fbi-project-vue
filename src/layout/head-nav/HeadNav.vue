<template>
  <header class="head-nav">
    <el-row>
      <el-col :span="4" class='logo-container'>
        <img src="../../assets/img/logo-sm.png" class='logo' alt="">
      </el-col>
      <el-col :span="16">
        <el-menu :default-active="$store.state.router.headerCurRouter" mode="horizontal" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
          <el-menu-item v-for='item in $store.state.user.userinfo.menuList' :index="item.menuUrl" :key='item.menuUrl'>
            {{item.menuName}}
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" class="userinfo">
        <span class='username'>
          <el-dropdown trigger="click" @command='setDialogInfo'>
            <span class="el-dropdown-link">
              {{this.$store.state.user.userinfo.userName}}
              <i class="el-icon-caret-bottom el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command='info'>修改信息</el-dropdown-item>
              <el-dropdown-item command='pass' v-if='$store.state.user.userinfo.is_update_pass'>修改密码</el-dropdown-item>
              <el-dropdown-item command='set' v-if='$store.state.user.userinfo.pid==0'>系统设置</el-dropdown-item>
              <el-dropdown-item command='logout'>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
        <i class="fa fa-sign-out logout" @click='logout'></i>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  import HeadNavJs from './HeadNav.js'

  export default HeadNavJs
</script>

<style scoped lang='less'>
  .logo-container {
    height: 60px;
  }

  .logo {
    height: 50px;
    width: auto;
    margin-left: 10px;
    margin-top: 5px;
  }

  .fa-user {
    position: relative;
    top: -2px;
    margin-right: 4px;
  }

  .head-nav {
    width: 100%;
    height: 60px;
    background: #324057;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
    color: #fff;
    border-bottom: 1px solid #1f2d3d;

    .logout {
      width: 60px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      float: right;
      cursor: pointer;
    }
  }

  .userinfo {
    text-align: right;
  }

  .username {
    height: 60px;
    line-height: 60px;
    cursor: pointer;

    .el-dropdown {
      color: #fff;
    }
  }
</style>
