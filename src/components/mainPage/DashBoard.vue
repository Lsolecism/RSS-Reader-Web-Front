<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
      <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
      <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
    </svg>
    <el-button type="primary" plain v-model="isCollapse" @click=changeWidth() style="margin-left: 10px">
      <el-icon v-if="isCollapse" ><Expand /></el-icon>
      <el-icon v-else ><Fold /></el-icon>
    </el-button>
    <el-menu
        id = "menu"
        default-active="2"
        class="el-menu-vertical"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <template #title>Navigator Two</template>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting, Expand, Fold,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const menu = document.getElementById('menu')
const changeWidth = () => {
  isCollapse.value = !isCollapse.value
  if (isCollapse.value) {
    menu?.classList.remove('el-menu-vertical')
    menu?.classList.add('el-menu--collapse')
  } else {
    menu?.classList.remove('el-menu--collapse')
    menu?.classList.add('el-menu--vertical')
  }
}
</script>

<style>
.el-menu-vertical{
  width: 180px;
  min-height: 600px;
}
.el-menu--collapse{
  width: 60px;
  min-height: 700px;
}
</style>