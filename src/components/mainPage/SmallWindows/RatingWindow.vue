<script setup>
import {reactive, ref} from "vue";
const dialogFormVisible = defineModel()
const formLabelWidth = '140px'
const form = reactive({
  rating_value:''
})
const rating_value = ref(0)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>

<template>
  <el-dialog v-model="dialogFormVisible" title="评分" width="500">
    <el-form :model="form">
      <el-form-item label="请给更多的✨小星星✨支持呀！" :label-width="formLabelWidth">
        <el-rate v-model="rating_value" :colors="colors" allow-half
        :texts="['太差了', '差', '一般', '好', '太棒了']" show-text clearable/>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button  @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" plain @click="dialogFormVisible = false">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>