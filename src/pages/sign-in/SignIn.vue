<template>
  <form>
    <base-card @submit.prevent="login">
      <transition-group name="p-message" tag="div">
        <Message
            v-if="errorOccurred"
            severity="error"
        >
          {{ errorMessage }}
        </Message>
      </transition-group>
      <h2>sign in</h2>
      <div class="form-control">
        <h4>e-mail</h4>
        <InputText type="email" v-model="form.email"/>
      </div>
      <div class="form-control">
        <h4>password</h4>
        <InputText type="password" v-model="form.password"/>
      </div>
      <Button :label="'Sign In'"
              @click="login"
              :disabled="isAuthenticated"/>
    </base-card>
  </form>
</template>

<script>
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import {mapGetters} from 'vuex';

export default {
  components: {InputText, Message},
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
form {
  display: flex;
  justify-content: center;
}

.card {
  width: 40rem;
  display: flex;
  flex-direction: column;
}

.card * {
  align-self: center;
}

h4 {
  margin: 0 0 0.4rem 0;
}

.form-control {
  padding-bottom: 1rem;
}

.form-control label {
  padding-right: 1.5rem;
}
</style>