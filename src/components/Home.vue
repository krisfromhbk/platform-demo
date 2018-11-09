<template>
  <div>
    <b-navbar toggleable="sm" :sticky="true" type="dark" variant="primary" class="mb-4">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="/">NavBar</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="tasks">Каторга</b-nav-item>
          <b-nav-item to="score">Топ решателей</b-nav-item>
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
    <router-view></router-view>
    <div class="test">Scroll testing</div>

  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { AUTH_LOGOUT_REQUEST } from '@/store/actions/auth'
import { GET_TASKS_REQUEST } from '@/store/actions/tasks'

export default {
  methods: {
    ...mapActions('auth', [
      AUTH_LOGOUT_REQUEST
    ]),
    ...mapActions('tasks', {
      GET_TASKS_REQUEST
    }),
    logout () {
      this.AUTH_LOGOUT_REQUEST()
    }
  },

  created () {
    this.GET_TASKS_REQUEST()
  }
}
</script>

<style>
  .test {
    height: 150vh;
  }
</style>
