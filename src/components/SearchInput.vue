<template>
  <form @submit.prevent="getUser" class="search">
    <input 
      type="text" 
      placeholder="Введите имя пользователя" 
      class="search-input"
      v-model="inputValue">
    <button type="button" @click="getUser" class="search-btn">НАЙТИ</button>
  </form>
</template>

<script setup>
  import { useUserSearch } from '../stores/UserSearch'
  import { ref, computed } from 'vue'
  const inputValue = ref('')
  const UserSearch = useUserSearch()
  const getUser = () => {
    UserSearch.getUserRepo(inputValue.value)
    ClearInput()
  }
  const ClearInput = () => {
    inputValue.value = ''
  }
</script>