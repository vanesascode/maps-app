<template>
  <main>
    <h1>HI</h1>
    <p>User Location: {{ placesStore.userLocationGetter }}</p>
    <p v-if="placesStore.isLoading">Loading...</p>
    <p
      v-else-if="
        !placesStore.isLoading &&
        placesStore.userLocation[0] === 0 &&
        placesStore.userLocation[1] === 0
      "
    >
      Unable to fetch location.
    </p>
  </main>
</template>

<script setup lang="ts">
import { usePlacesComposable } from '@/composables/usePlacesComposable'

const { placesStore } = usePlacesComposable()
</script>
