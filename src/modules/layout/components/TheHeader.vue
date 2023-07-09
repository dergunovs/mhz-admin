<template>
  <header :class="$style.header">
    <div>Админка</div>
    <button @click="logout" type="button">Выйти</button>
  </header>
</template>

<script setup lang="ts">
import { logout } from '@/auth/services';
</script>

<style module lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  background-color: var(--color-primary-light);
}
</style>
