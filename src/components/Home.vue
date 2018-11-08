<template>
  <div>
    <b-navbar toggleable="md" :sticky="true" type="dark" variant="primary" class="mb-4">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Каторга</b-nav-item>
          <b-nav-item href="#">Топ решателей</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item v-on:click="logout">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <!-- Здесь будут отображаться таски -->
    <!-- <task-view/> -->

    <div class="test">Simple home page</div>
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
  .test {
    height: 150vh;
  }
</style>
