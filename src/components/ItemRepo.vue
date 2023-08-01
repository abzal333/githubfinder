<template>
  <div class="item">
    <div class="item-text">
      <h2>{{item.name}}</h2>
      <p>Кол-во звёзд: <span>{{ item.stargazers_count }}</span></p>
      <p>Дата добавления: <span>{{ new Date(item.created_at).toLocaleDateString()}}</span></p>
    </div>
    <a :href="item.html_url" class="item-btn">ПОСЕТИТЬ</a>
  </div>
</template>

<script setup>
  defineProps({
    item: {
      type: Object
    }
  })
</script>
