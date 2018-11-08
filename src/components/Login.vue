<template>
  <div>
    <div class="d-flex align-items-center justify-content-center" style="height: 100vh;">
      <div class="justify-content-center">
        <div class="myAlert">
          <b-alert :show="wrongData()" fade variant="danger" style="text-align: center;">Неверные данные для входа</b-alert>
        </div>
        <b-card no-body class="text-center" style="width: 32rem;">
          <b-card-body class="d-flex flex-column align-items-center">
            <h4 class="mb-4">Авторизация</h4>

            <!-- <div class="" v-show="wrongData()">Неправильный логин/пароль</div> -->
            <b-form @submit.prevent="login" :novalidate="true">
              <b-form-group class="mb-4" :class="{ swaying: $v.username.$error }">
                <b-form-input :state="usernameValidation" style="width: 22rem;" type="text" v-model.trim="$v.username.$model" placeholder="Логин сюды"></b-form-input>
              </b-form-group>
              <!-- <div class="error swaying" v-if="!$v.username.required">Field is required</div> -->
              <b-form-group class="mb-4" :class="{ swaying: $v.password.$error }">
                <b-form-input :state="passwordValidation" type="password" v-model="password" placeholder="А пароль сюды"></b-form-input>
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
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },

  validations: {
    username: {
      required
    },
    password: {
      required
    }
  },

  computed: {
    usernameValidation () {
      if (!this.$v.username.$error) {
        return null
      } else {
        return false
      }
    },
    passwordValidation () {
      if (!this.$v.password.$error) {
        return null
      } else {
        return false
      }
    }
  },

  methods: {
    ...mapActions('auth', [
      AUTH_LOGIN_REQUEST
    ]),
    ...mapGetters('auth', [
      'isLoggingIn',
      'wrongData'
    ]),
    login () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const { username, password } = this
        this.AUTH_LOGIN_REQUEST({ username, password })
      }
    }
  },

  components: {
    'pulse-loader': PulseLoader
  }
}
</script>

<style>
  @keyframes swing {
    15% {
      transform: translateX(5px);
    }
    30% {
      transform: translateX(-5px);
    }
    50% {
      transform: translateX(3px);
    }
    65% {
      transform: translateX(-3px);
    }
    80% {
      transform: translateX(2px);
    }
    100% {
      transform: translateX(0);
    }
  }
  .swaying {
    animation: swing 1s ease;
    animation-iteration-count: 1;
  }
</style>
