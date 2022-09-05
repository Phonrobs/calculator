import { defineStore } from "pinia"

export const useMemoryStore = defineStore('memory', {
    state() {
        return {
            items: []
        }
    },

    actions: {
        addItem(number) {
            this.items.push(number)
        },
        clear() {
            this.$reset()
        }
    }
})