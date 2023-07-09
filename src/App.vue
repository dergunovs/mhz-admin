<template>
  <div :class="$style.main">
    <TheHeader v-if="isAuth" />

    <Suspense>
      <RouterView :class="$style.content" />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import TheHeader from '@/layout/components/TheHeader.vue';

import { useAuth, isAuth } from '@/auth/composables';

const { checkAuth } = useAuth();

onMounted(async () => {
  await checkAuth();
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  gap: 32px;
  min-height: 100vh;
}

.content {
  flex: 1;
  padding: 0 64px;
}
</style>
