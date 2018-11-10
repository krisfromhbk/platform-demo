<template>
  <div>
    Ага, компонентик с тасками, накатить сортировку (по типам хотя бы)
    <div class="d-flex align-items-center justify-content-center flex-container wrap m-3">
      <task-preview v-for="(task, index) in tasks" v-bind:task="task" v-bind:index="index" v-bind:key="task.id" ></task-preview>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import TaskPreview from './TaskPreview'

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
  ]),

  components: {
    TaskPreview
  }
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
