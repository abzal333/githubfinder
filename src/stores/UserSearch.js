import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserSearch = defineStore('User', () => {
  // state
  const search = ref('')
  const userInfo = ref(null)
  const repozitories = ref(null)
  const currentSort = ref('name')
  const currentSortDir = ref('asc')
  // getters
  const getUserInfo = computed(() => userInfo)
  const getRepo = computed(() => repozitories)
  // actions
  const getUserRepo = async (search) => {
    try {
      const queryRepo = await fetch(`https://api.github.com/users/${search}/repos`)
      const resRepo = await queryRepo.json()
      const queryUser = await fetch(`https://api.github.com/users/${search}`)
      const resInfo = await queryUser.json()
      console.log(resRepo);
      console.log(resInfo);
      userInfo.value = resInfo
      repozitories.value = resRepo
    } catch (e) {
      console.log('Ошибка ' + e);
    }
  }
  const sortRepo = (event) => {
    if(event === currentSort.value){
      currentSortDir.value = currentSortDir.value === 'asc' ? 'desc' : 'asc' 
    }else{
      currentSort.value = event
    }
  }
  const getRepoSort = () => {
    if(getRepo.value != null){
      return repozitories.value.sort((a, b) => {
        let mod = 1
        if(currentSortDir.value == 'desc') mod = -1
        if(a[currentSort.value] < b[currentSort.value]) return -1 * mod
        if(a[currentSort.value] > b[currentSort.value]) return 1 * mod
      })
    }
  }
  
  return {search,userInfo,repozitories, getUserRepo,getUserInfo,getRepo,sortRepo,getRepoSort,currentSortDir,currentSort}
})
