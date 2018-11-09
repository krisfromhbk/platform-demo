<template>
  <div>
    Ага, компонентик с тасками
    <!-- <div class="d-flex align-items-center justify-content-center flex-container wrap ml-3 mr-3">
      <b-card class="m-4" v-for="task in tasks" :key="task.id" style="width: 15rem; height: 8rem;" :title="task.title">
        {{ task.shortDescription }}
      </b-card>
    </div> -->
    <b-button v-on:click="process">Таски в студию</b-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { GET_TASKS_REQUEST } from '@/store/actions/tasks'

export default {
  data () {
    return {
      // tasks: [
      //   { id: 1, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 2, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 3, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 4, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 5, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 6, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 7, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 8, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 9, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 10, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 11, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 12, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 13, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 14, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 15, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
      //   { id: 16, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 }
      // ]
      // tasks: null
    }
  },

  methods: {
    ...mapActions('tasks', [
      GET_TASKS_REQUEST
    ]),
    ...mapGetters('tasks', [
      'isProcessing'
    ]),
    process () {
      this.GET_TASKS_REQUEST()
    }
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
