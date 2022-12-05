<template>
  <el-container style="height: 100%">
    <el-header height="100px">
      <span style="font-family: Consolas; font-size: 24px">忘川风华录战斗数值在线计算器</span>
    </el-header>
    <el-container>
      <el-aside width="150px">
        <el-menu default-active="1" v-model="menuActive">
          <el-menu-item index="1" @click="menuActive='1'"><span>伤害计算</span></el-menu-item>
          <el-menu-item index="2" @click="menuActive='2'"><span>命中率计算</span></el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <attack v-if="menuActive==='1'"/>
        <control v-if="menuActive==='2'"/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import attack from "@/components/attack.vue";
import control from "@/components/control.vue";

export default {
  components: {
    attack,
    control
  },
  data() {
    return {
      menuActive: '1'
    }
  }
}
</script>

<style>
.el-header {
  text-align: center;
  background-color: #81e7ff;
  line-height: 100px;
}

.el-aside {
  text-align: center;
  line-height: 200px;
}

.el-main {
  text-align: center;
  background-color: #c6f7ff;
}

.el-menu {
  text-align: center;
  background-color: #a9eeff;
  height: 100%;
}

.el-input-number .el-input__increase, .el-input-number .el-input__decrease {
  width: 30px;

}

/*span {*/
/*  width: 100% !important;*/
/*  float: left !important;*/
/*  overflow: hidden !important;*/
/*  text-overflow: ellipsis !important;*/
/*  white-space: normal !important;*/
/*}*/

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>