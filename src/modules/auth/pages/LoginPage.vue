<template>
  <div :class="$style.container">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from '@/auth/components/LoginForm.vue';
</script>

<style module lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
