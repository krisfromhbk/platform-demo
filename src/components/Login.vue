<template>
  <div>
    <form class="login" @submit.prevent="login">
      <h1>Sign in</h1>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Snoopy"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
  </div>
</template>

<script>
import { AUTH_LOGIN_REQUEST, AUTH_LOGOUT_REQUEST } from '@/store/actions/auth'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    login () {
      const { username, password } = this
      this.$store.dispatch(AUTH_LOGIN_REQUEST, { username, password })
    }
  },

  created () {
    this.$store.dispatch(AUTH_LOGOUT_REQUEST)
  }
}
</script>

<style>

</style>
