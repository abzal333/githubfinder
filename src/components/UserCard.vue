<template>
  <div class="card" v-if="userInfo">
    <div class="card-left">
      <img :src="userInfo.avatar_url" alt="" class="card-left__img">
      <a href="#!" class="card-left__link">ПОСЕТИТЬ</a>
    </div>
    <div class="card-right">
      <h3>{{ userInfo.name }}</h3>
      <ul class="card-right__list">
        <li>Репозиториев: <span>{{ userInfo.public_repos }}</span></li>
        <li>Создан: <span>{{ new Date(userInfo.created_at).toLocaleDateString() }}</span></li>
        <li>Подписщиков: <span>{{ userInfo.followers }}</span></li>
        <li>Подписок: <span>{{ userInfo.following }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { useUserSearch } from '../stores/UserSearch.js'
  const userInfo = useUserSearch().getUserInfo 
</script>
