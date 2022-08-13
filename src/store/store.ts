import {defineStore} from "pinia"

export const useStore = defineStore("vite-store", {
    state: () => ({
        name: "store-data"
    }),
    actions: {
        changeValue() {
            this.name = "changed"
        }
    }
})