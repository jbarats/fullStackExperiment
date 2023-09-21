<!-- <script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script> -->

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'abc',
      password: ''
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
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }   
  }
}
</script>

<template>
  <div >
    <h1>Register</h1>

    <input 
      type = "email" 
      name = "email"
      v-model = "email"
      placeholder = "email" />
    <br />
    <input
      type = "password"
      name = "password"
      v-model = "password"
      placeholder = "password" />
      <br />
      <button 
      @click = "register"> Register </button>
  </div>
</template>

<style scoped>

</style>
