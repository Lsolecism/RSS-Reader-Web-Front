<script setup>

import DashBoard from "@/components/mainPage/DashBoard.vue";
import Header from "@/components/mainPage/Header.vue";

</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <DashBoard/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>


<style scoped>

</style>