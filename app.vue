<template>
  <div>
    <button @click="triggerMiddleware">trigger middleware</button>
  </div>
</template>

<script setup lang="ts">
const triggerMiddleware = async () => {
  const res = await $fetch("/api/test");
  console.log("response: ", res);
};
</script>
