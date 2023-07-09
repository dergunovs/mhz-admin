<template>
  <form @submit.prevent="login(formData)" :class="$style.form">
    <label :class="$style.label">
      <span>E-mail</span>
      <input v-model="formData.email" />
    </label>

    <label :class="$style.label">
      <span>Пароль</span>
      <input v-model="formData.password" type="password" />
    </label>

    <button type="submit">Войти</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAuth } from '@/auth/composables';

const { login } = useAuth();

const formData = ref({
  email: '',
  password: '',
});
</script>

<style module lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.label {
  display: flex;
  flex-direction: column;
}
</style>
