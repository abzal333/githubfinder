<template>
  <div class="sort">
    <h2 class="sort-title">Сортировка</h2>
    <div class="sort-list">
      <button 
        class="sort-list__link" 
        @click="sort.sortRepo('name')"
        :class="{active: sort.currentSort == 'name' ? 'active' : ''}">
        ИМЯ
      </button>
      <button 
        class="sort-list__link" 
        @click="sort.sortRepo('stargazers_count')"
        :class="{active: sort.currentSort == 'stargazers_count' ? 'active' : ''}">
        ЗВЕЗДЫ
      </button>
      <button 
        class="sort-list__link" 
        @click="sort.sortRepo('created_at')"
        :class="{active: sort.currentSort == 'created_at' ? 'active' : ''}">
        ДАТА
      </button>
    </div>
  </div>
</template>

<script setup>
  import { useUserSearch } from '../stores/UserSearch.js'
  const sort = useUserSearch()
</script>