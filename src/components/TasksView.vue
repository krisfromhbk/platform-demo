<template>
  <div>
    Ага, компонентик с тасками
    <!-- <ul id="example-1">
      <li v-for="task in tasks" :key="task.id">
        {{ task.id }}
      </li>
    </ul> -->
    <div class="d-flex align-items-center justify-content-center flex-container wrap ml-3 mr-3">
      <b-card class="m-4" v-for="task in tasks" :key="task.id" style="width: 15rem; height: 8rem;" :title="task.title">
        {{ task.shortDescription }}
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        { id: 1, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 2, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 3, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 4, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 5, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 6, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 7, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 8, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 9, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 10, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 11, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 12, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 13, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 14, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 15, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 },
        { id: 16, title: 'title', shortDescription: 'aga, text', description: 'nu-nu, mnogo teksta', value: 300, solved: 14 }
      ]
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
