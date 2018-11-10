<template>
  <div>
    тупо рейтинг
    <b-list-group class="m-5 pl-5 pr-5">
      <b-list-group-item v-for="score in scores" :key="score.title" class="m-2">
        <div class="d-flex justify-content-between">
          <div>{{ score.title }}</div>
          <div>{{ score.score }}</div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState('scores', [
    'scores'
  ])
}
</script>

<style>

</style>
