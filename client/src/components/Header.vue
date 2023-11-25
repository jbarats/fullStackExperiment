<template>
    <v-toolbar fixed class="cyan">
        <v-toolbar-title class="mr-4">
            <span
                @click="navigateTo({name: 'root'})">
                Tabtracker
            </span>
        </v-toolbar-title>
    </v-toolbar>

    <v-spacer></v-spacer>

    <v-toolbar-items>
        <v-btn flat dark
        @click="navigateTo({name: 'Register'})">
            Sign Up
        </v-btn>

        <v-btn flat dark
        @click="navigateTo({name: 'Login'})">
            Login
        </v-btn>
    </v-toolbar-items>
</template>

<script>
export default {
    methods: {
        navigateTo (route) {
            this.$router.push(route.name)
        }
    }
}
</script>

<style scoped>
</style>
