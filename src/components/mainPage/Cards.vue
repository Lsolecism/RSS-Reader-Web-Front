<template>
  <el-card style="width: 500px;max-height: 380px;border-radius: 20px" shadow="hover">
    <template #header>{{title}}</template>
    <div class="card-content">
      <img :src="imageSrc" style="width: 280px" alt="error" />
      <div class="text-container">
        <span style=" font-size: 30px; white-space: pre-line ;align-self: flex-start"  class="line-text">{{comments}}</span>
      </div>
    </div>
  </el-card>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  imageSrc: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>.card-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text-container {
  flex: 1;
  padding-right: 10px;
  padding-left: 10px;
}
.line-text {
  background: linear-gradient(to right, #ec695c, #61c454 )no-repeat right bottom;
  background-size: 0 2px;
  transition: background-size 1300ms;
}
.line-text:hover {
  background-position-x: left;
  background-size: 100% 2px;
}
</style>