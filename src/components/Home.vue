<template>
  <div>
    Simple home page
    <br>
    <button v-on:click="logout">Logout</button>
  </div>
</template>

<script>
import { AUTH_LOGOUT_REQUEST } from '@/store/actions/auth'

export default {
  methods: {
    logout () {
      this.$store.dispatch(AUTH_LOGOUT_REQUEST)
    }
  }
}
</script>

<style>

</style>
