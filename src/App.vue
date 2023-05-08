<template>
  <div v-if="isLoaded" :class="$style.main">
    <TheHeader />

    <Suspense>
      <RouterView :class="$style.content" />
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import TheHeader from '@/layout/components/TheHeader.vue';

import { checkAuth, isLoggedIn } from '@/auth/services';
import router from '@/common/router';

const isLoaded = ref(false);

onMounted(async () => {
  await checkAuth();
  if (isLoggedIn.value) router.push('/main');
  isLoaded.value = true;
});
</script>

<style module lang="scss">
.main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
