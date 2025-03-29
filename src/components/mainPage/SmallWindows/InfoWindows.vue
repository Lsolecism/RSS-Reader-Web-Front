<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import {Plus} from "@element-plus/icons-vue";

const dialogFormVisible = defineModel()
const isEditing = ref(false)
const formData = ref({
  photo: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
  username: 'kooriookami',
  userID: '18100000000',
  Email:'',
  remarks: 'School',
  profile: 'No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province'
})

const handleEdit = () => {
  isEditing.value = true
}

const handleSave = async () => {
  try {
    // 假设你有一个 API 来保存数据
    await saveDataToBackend(formData.value)
    ElMessage.success('保存成功')
    isEditing.value = false
  } catch (error) {
    ElMessage.error('保存失败')
  }
}

const saveDataToBackend = async (data) => {
  // 这里调用你的后端 API
  // 例如：await axios.post('/api/save', data)
  console.log('Data sent to backend:', data)
}
</script>

<template>
  <el-dialog v-model="dialogFormVisible" title="评分" width="500">
    <el-descriptions
        v-if="!isEditing"
        title="Width vertical list"
        direction="vertical"
        border
        style="margin-top: 20px"
    >
      <el-descriptions-item
          :rowspan="2"
          :width="140"
          label="Photo"
          align="center"
      >
        <el-image
            style="width: 100px; height: 100px"
            :src="formData.photo"
        />
      </el-descriptions-item>
      <el-descriptions-item label="Username">{{ formData.username }}</el-descriptions-item>
      <el-descriptions-item label="UserID">{{ formData.userID }}</el-descriptions-item>
      <el-descriptions-item label="Email">{{ formData.Email }}</el-descriptions-item>
      <el-descriptions-item label="Remarks">
        <el-tag size="small">{{ formData.remarks }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="Profile">{{ formData.profile }}</el-descriptions-item>
    </el-descriptions>

    <el-form v-else :model="formData" label-width="100px" style="margin-top: 20px;">
      <el-form-item label="Photo">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
        >
          <img v-if="formData.photo" :src="formData.photo" class="avatar"  alt=""/>
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="Username">
        <el-input v-model="formData.username" />
      </el-form-item>
      <el-form-item label="Telephone">
        <el-input v-model="formData.userID" />
      </el-form-item>
      <el-form-item label="Place">
        <el-input v-model="formData.Email" />
      </el-form-item>
      <el-form-item label="Remarks">
        <el-input v-model="formData.remarks" />
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="formData.profile" type="textarea" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button v-if="!isEditing" type="primary" @click="handleEdit">编辑</el-button>
        <el-button v-else type="primary" @click="handleSave">保存</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
