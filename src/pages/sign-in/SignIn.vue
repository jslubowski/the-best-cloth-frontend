<template>
  <form>
    <base-card @submit.prevent="login" class="auth-card">
<!--      <transition-group name="p-message" tag="div">-->
<!--        <Message-->
<!--            v-if="errorOccurred"-->
<!--            severity="error"-->
<!--        >-->
<!--          {{ errorMessage }}-->
<!--        </Message>-->
<!--      </transition-group>-->
<!--      <h3>sign in</h3>-->
<!--      <div class="form-control">-->
<!--        <h4>e-mail</h4>-->
<!--        <InputText type="email" v-model="form.email"/>-->
<!--      </div>-->
<!--      <div class="form-control">-->
<!--        <h4>password</h4>-->
<!--        <InputText type="password" v-model="form.password"/>-->
<!--      </div>-->
<!--      <Button :label="'Sign In'"-->
<!--              @click="login"/>-->

      <b-form @submit.prevent="login" class="auth-form">
        <h3 class="auth-card-title">sign in</h3>
        <b-alert :show="errorOccurred" variant="danger">
          <b-icon class="message-icon" icon="exclamation-triangle"></b-icon>
          {{ errorMessage }}
        </b-alert>
        <b-form-group label="email">
          <b-form-input
          v-model="form.email"
          type="email"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group label="password">
          <b-form-input
          v-model="form.password"
          type="password"
          ></b-form-input>
        </b-form-group>
        <b-button
            type="submit"
            variant="primary"
            class="auth-button"
        >sign in</b-button>
      </b-form>
    </base-card>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      errorOccurred: false,
      errorMessage: 'none',
      form: {
        email: '',
        password: ''
      },
    }
  },
  computed: {
    ...mapGetters('auth', [
      'isAuthenticated',
      'isLoggingIn'
    ])
  },
  methods: {
    login() {
      this.errorOccurred = false;
      this.errorMessage = '';
      this.$store.dispatch(
          'auth/login',
          this.form
      )
          .then(() => {
            if (this.authorizationError) {
              this.errorOccurred = true;
              this.errorMessage = 'Bad credentials. Try again.';
            }
            else if (!this.errorOccurred) {
              this.$router.replace('/');
            }
          })
      .catch(error => {
        this.errorOccurred = true;
        if (error.response !== undefined && error.response.status === 401) {
          this.errorMessage = 'Wrong credentials. Enter correct username and password.';
        } else {
          this.errorMessage = 'Unexpected error occurred. Please try again';
        }
      });
    }
  },
}
</script>

<style scoped>

</style>