<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log(`email has changed to ${value}`)
    }
  },
  mounted () {
    setTimeout( () => {
      this.email = 'hello world'
    }, 2000)
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
        email: this.email,
        password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }   
  }
}
</script>

<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class = "cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
      </div>
    </v-flex>
  </v-layout>

  <div class="pl-4 pr-4 pt-2 pb-2">
    <v-text-field
      label="email"
      v-model="email"
    ></v-text-field>
    <br />
    <v-text-field
      label="password"
      v-model="password"
      type ="password"
      autocomplete="new-password"
    ></v-text-field>
      <br />
      <div class="error" v-html="error" />
      <v-btn 
        class="cyan"
        @click = "register"> 
        Register 
  </v-btn>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>
