<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 261.76 226.69">
      <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41b883"/>
      <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
    </svg>
    <el-button type="primary" plain v-model="isCollapse" @click="changeWidth" style="margin-left: 10px">
      <el-icon v-if="isCollapse"><Expand /></el-icon>
      <el-icon v-else><Fold /></el-icon>
    </el-button>
    <el-menu
        id="menu"
        default-active=""
        class="el-menu-vertical"
        :collapse="isCollapse"
        @select="handleSelect"
    >
      <el-sub-menu v-for="icon in iconList" :key="icon.id" :index="String(icon.id)">
        <template #title>
          <el-icon><component :is="icon.icon" /></el-icon>
          <span>{{icon.text}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="item in icon.items" :key="item.index" :index="item.index">
            {{ item.text }}
            <el-button type="text" @click.stop="deleteItem(item, icon)" style="float: right; margin-left: 20px;">
              <el-icon><Delete /></el-icon>
            </el-button>
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
      <el-button-group style="margin-left: 10px">
        <el-button @click="showAddRssWindow = true"><el-icon><Plus /></el-icon></el-button>
      </el-button-group>
    </el-menu>
  </div>
  <add-rss-window @add-rss="handleAddRss" v-model="showAddRssWindow"/>
</template>

<script lang="ts" setup>
import {reactive, ref} from 'vue'
import {
  Expand,
  Fold,
  Plus,
  Burger,
  Coffee,
  ShoppingBag, Soccer, Cpu, Money, Ship, Camera, VideoPlay, Film, Headset, Reading, More,
  Delete
} from '@element-plus/icons-vue'
import AddRssWindow from "@/components/mainPage/SmallWindows/addRssWindow.vue";

const iconList = reactive([
  { icon: Burger, text: '美食', id: 1, items: [] },
  { icon: Coffee, text: '休闲', id: 2, items: [] },
  { icon: ShoppingBag, text: '购物', id: 3, items: [] },
  { icon: Soccer, text: '运动', id: 4, items: [] },
  { icon: Cpu, text: '科技', id: 5, items: [] },
  { icon: Money, text: '金融', id: 6, items: [] },
  { icon: Ship, text: '旅行', id: 7, items: [] },
  { icon: Camera, text: '照相', id: 8, items: [] },
  { icon: VideoPlay, text: '视频', id: 9, items: [] },
  { icon: Film, text: '电影', id: 10, items: [] },
  { icon: Headset, text: '音乐', id: 11, items: [] },
  { icon: Reading, text: '阅读', id: 12, items: [] },
  { icon: More, text: '其他', id: 13, items: [] }
]);

const handleAddRss = (formData: { categorySelected: string, rss_name: string,rss_address:string}) => {
  const newText = formData.categorySelected;
  const newName = formData.rss_name;
  const newAddress = formData.rss_address;
  for (let i = 0; i < iconList.length; i++) {
    if (newText === iconList[i].text) {
      const newItem = {
        index: `${iconList[i].id}-${iconList[i].items.length + 1}`,
        text: newName,
        address: newAddress
      };
      // 将新的 item 添加到 items 数组中
      iconList[i].items.push(newItem);
      break;
    }
  }
};

const deleteItem = (item: any, icon: any) => {
  const index = icon.items.indexOf(item);
  if (index > -1) {
    icon.items.splice(index, 1);
  }
};

const emit = defineEmits(['categorySelected']);
const showAddRssWindow = ref(false);
const isCollapse = ref(true);

const changeWidth = () => {
  isCollapse.value = !isCollapse.value;
};

const handleSelect = (key: string) => {
  console.log(key);
  emit('categorySelected', key);
};
</script>

<style>
.el-menu-vertical {
  width: 180px;
  min-height: 600px;
}
.el-menu--collapse {
  width: 80px;
  min-height: 700px;
}
</style>
