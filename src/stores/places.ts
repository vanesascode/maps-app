import { defineStore } from 'pinia'

export const usePlacesStore = defineStore({
  id: 'places',

  state: () => ({
    isLoading: true,
    userLocation: [0, 0] as [number, number]
  }),

  getters: {
    userLocationGetter(state) {
      return `${state.userLocation[0]} ${state.userLocation[1]}`
    }
  },

  actions: {
    setUserLocation(location: [number, number]) {
      this.userLocation = location
    },
    setLoadingStatus(status: boolean) {
      this.isLoading = status
    },
    async fetchInitialLocation() {
      this.setLoadingStatus(true)
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.setUserLocation([position.coords.longitude, position.coords.latitude])
            this.setLoadingStatus(false)
          },
          (error) => {
            console.error(error)
            this.setLoadingStatus(false)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
        this.setLoadingStatus(false)
      }
    }
  }
})
