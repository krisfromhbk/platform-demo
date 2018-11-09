<template>
  <div>
    Ага, компонентик с тасками
    <div class="d-flex align-items-center justify-content-center flex-container wrap m-3">
      <b-card no-body class="m-4" v-for="task in tasks" :key="task.id" style="width: 15rem; height: 8rem;">
        <div class="d-block ml-3 mr-3">
          <div class="d-flex align-items-center justify-content-between">
            <div class="mt-2"><h4>{{ task.title }}</h4></div>
            <b-badge variant="success" style="">{{ task.solved }}</b-badge>
          </div>
          <div class="mb-2">
            <b-badge variant="dark" style="">{{ task.type }}</b-badge>
            <b-badge variant="info" style="">{{ task.value }}</b-badge>
          </div>
        </div>
        <div class="ml-4">
          {{ task.shortDescription }}
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },

  methods: {
    ...mapGetters('tasks', [
      'isProcessing'
    ])
  },

  computed: mapState('tasks', [
    'tasks'
  ])
}
</script>

<style>
  .flex-container {
    border: 1px solid silver;
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }

  .wrap {
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }
</style>
