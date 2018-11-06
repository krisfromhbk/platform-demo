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
import { mapActions } from 'vuex'
import { AUTH_LOGIN_REQUEST } from '@/store/actions/auth'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions('auth', [
      AUTH_LOGIN_REQUEST
    ]),
    login () {
      const { username, password } = this
      this.AUTH_LOGIN_REQUEST({ username, password })
    }
  }
}
</script>

<style>

</style>
