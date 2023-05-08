<template>
  <ElForm labelPosition="top">
    <ElFormItem label="Имя">
      <ElInput v-model="formData.email" />
    </ElFormItem>

    <ElFormItem label="Пароль">
      <ElInput v-model="formData.password" type="password" />
    </ElFormItem>

    <ElButton @click="handleLogin">Войти</ElButton>
  </ElForm>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus';

import { login } from '@/auth/services';

const router = useRouter();

const formData = ref({
  email: '',
  password: '',
});

async function handleLogin() {
  try {
    await login(formData.value);
    router.push('/main');
  } catch (error) {}
}
</script>
