//remember to add a state for: token, loggedin?, user (all rel info?) not really sure what that will entail

import {defineStore} from 'pinia'

export const useTheOneStore = defineStore('theOneStore', {
    state: () => ({
        isLoggedIn: false,
        user: "",
        token: ""
    }),
    getters: {},
    actions: {
        toggleLoggedIn() {
            this.isLoggedIn = !this.isLoggedIn
        }
    }
})