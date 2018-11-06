<template>
  <div>
    Simple home page
    <br>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { AUTH_LOGOUT_REQUEST } from '@/store/actions/auth'

export default {
  methods: {
    ...mapActions('auth', [
      AUTH_LOGOUT_REQUEST
    ]),
    logout () {
      this.AUTH_LOGOUT_REQUEST()
    }
  }
}
</script>

<style>

</style>
