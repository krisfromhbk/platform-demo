<template>
  <div>
    <div class="d-flex align-items-center" style="height: 100vh;">
      <div class="d-flex justify-content-center" style="width: 100vw;">
        <b-card no-body class="text-center" style="width: 32rem;">
          <b-card-body class="d-flex flex-column align-items-center">
            <h4 class="mb-4">Авторизация</h4>

            <b-form @submit.prevent="login">
              <b-form-group>
                <b-form-input style="width: 22rem;" type="text" v-model="username" required placeholder="Логин сюды"></b-form-input>
              </b-form-group>
              <b-form-group class="mb-4">
                <b-form-input type="password" v-model="password" required placeholder="А пароль сюды"></b-form-input>
              </b-form-group>
              <div class="mt-5" style="height: 38px;">
                <b-button v-if="!this.isLoggingIn()" type="submit" variant="primary" style="width: 10rem;">Вход</b-button>
                <pulse-loader :loading="this.isLoggingIn()" :color="'#007bff'" :size="'20px'" style="padding-top: 9px;"/>
              </div>
            </b-form>
          </b-card-body>
          <!-- добавить ссылку на форму регистрации (заодно сделать её) -->
          <b-link href="#" class="card-link mb-2">Нет аккаунта?</b-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { AUTH_LOGIN_REQUEST } from '@/store/actions/auth'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  methods: {
    ...mapActions('auth', [
      AUTH_LOGIN_REQUEST
    ]),
    ...mapGetters('auth', [
      'isLoggingIn'
    ]),
    login () {
      const { username, password } = this
      this.AUTH_LOGIN_REQUEST({ username, password })
    }
  },

  components: {
    'pulse-loader': PulseLoader
  }
}
</script>

<style>
  .test {
    height: 100vh;
  }
  .test1 {
    width: 100vw;
  }
  wrapper {
    height: 100vh;
    width: 100vw;
  }
</style>
