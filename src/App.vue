<template>
  <div id="app">
    <el-menu default-active="1" class="el-menu-demo" mode="horizontal" id="tabs"> 
      <el-menu-item index="1">
        <router-link to='/EIT12AA' class="link-line">版本管理</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to='/EIT16AA' class="link-line">运维执行单</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to='/EIT17AA' class="link-line">客户管理</router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link to='/EIT14AA' class="link-line">模块管理</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to='/EIT11AA' class="link-line">发布定义</router-link>
      </el-menu-item>
    </el-menu>
    <!--路由-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.link-line{
  text-decoration:none
}
</style>
