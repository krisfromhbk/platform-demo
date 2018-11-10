<template>
  <div>
    <b-card no-body class="m-4" style="width: 15rem; min-height: 8rem;">
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
</template>

<script>
export default {
  props: ['task']
}
</script>

<style>

</style>
