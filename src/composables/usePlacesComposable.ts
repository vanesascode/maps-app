import { onMounted } from 'vue'
import { usePlacesStore } from '@/stores/places'

export const usePlacesComposable = () => {
  const placesStore = usePlacesStore()

  onMounted(() => {
    placesStore.fetchInitialLocation()
  })

  return { placesStore }
}
