<template>
  <NavbarMenu/>
  <div class="content">
    <SearchInput/>
    <UserCard/>
    <SortRepo/>
    <div class="content-items" v-if="getRepo">
      <ItemRepo
        v-for="(item, ind) in getSortList"
        :key="ind"
        :item="item"
      />
    </div>
  </div>
</template>

<script setup>
  import NavbarMenu from '@/components/NavbarMenu.vue'
  import SearchInput from '@/components/SearchInput.vue'
  import UserCard from '@/components/UserCard.vue'
  import SortRepo from '@/components/SortRepo.vue'
  import ItemRepo from '@/components/ItemRepo.vue'
  import { useUserSearch } from './stores/UserSearch.js'
  import { computed } from 'vue'
  const UserSearch = useUserSearch()
  const getRepo = UserSearch.getRepo 
  const getSortList = computed(() => UserSearch.getRepoSort())
</script>
