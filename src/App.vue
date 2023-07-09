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

import { useAuth } from '@/auth/composables';

const isLoaded = ref(false);

const { checkAuth } = useAuth();

onMounted(async () => {
  await checkAuth();
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
