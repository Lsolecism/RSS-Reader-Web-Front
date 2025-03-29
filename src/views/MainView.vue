<script setup>

import DashBoard from "@/components/mainPage/DashBoard.vue";
import Header from "@/components/mainPage/Header.vue";
import Cards from "@/components/mainPage/Cards.vue";
import {onMounted, ref} from "vue";

const allCardsData = [
  { id: 1, title: "汉堡", comments: "美味的汉堡", imageSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", category: "1-1" },
  { id: 2, title: "薯条", comments: "脆脆的薯条", imageSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", category: "1-1" },
  { id: 3, title: "其他卡片1", comments: "其他卡片内容1", imageSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", category: "其他" },
  { id: 4, title: "其他卡片2", comments: "其他卡片内容2", imageSrc: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png", category: "其他" }
]
const cardsData = ref([])
const selectedCategory = ref('')
const filterCardsByCategory = (category) => {
  cardsData.value = allCardsData.filter(card => card.category === category)
}
onMounted(() => {
  filterCardsByCategory(selectedCategory.value)
})

const handleCategorySelected = (category) => {
  selectedCategory.value = category
  filterCardsByCategory(category)
}
</script>


<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="auto">
        <DashBoard @categorySelected="handleCategorySelected"/>
      </el-aside>
      <el-container>
        <el-header>
          <Header/>
        </el-header>
        <el-main class="card-flex">
          <Cards v-for="card in cardsData" :key="card.id" :title="card.title" :comments="card.comments" :image-src="card.imageSrc"/>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>


<style scoped>.card-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

</style>