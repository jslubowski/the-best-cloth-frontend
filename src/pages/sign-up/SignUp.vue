<template>
  <form @submit.prevent="register">
    <base-card>
      <transition-group name="p-message" tag="div">
        <Message
            v-if="errorOccurred"
            severity="error"
        >
          We encountered an error while trying to register your account. Please try again.
        </Message>
      </transition-group>
      <h2>sign up now</h2>
      <div class="form-control">
        <h4>e-mail</h4>
        <InputText type="email" v-model="form.email"/>
      </div>
      <div class="form-control">
        <h4>first name</h4>
        <InputText type="text" v-model="form.firstName"/>
      </div>
      <div class="form-control">
        <h4>last name</h4>
        <InputText type="text" v-model="form.lastName"/>
      </div>
      <div class="form-control">
        <h4>password</h4>
        <div class="password">
          <InputText
              type="password"
              v-model="form.password"
              :class="isPasswordEmptyOrTooShort ? 'p-invalid' : ''"
          />
          <small v-if="isPasswordEmptyOrTooShort" class="p-error">
            Password is too short!
          </small>
        </div>
      </div>
      <div class="form-control">
        <h4>repeat password</h4>
        <div class="password">
          <InputText
              type="password"
              v-model="repeatedPassword"
              :class="isPasswordIdentical ? 'p-invalid' : ''"/>
          <small v-if="isPasswordIdentical" class="p-error">
            Password is not the identical!
          </small>
        </div>
      </div>
      <Button :label="'Sign Up'"
              @click="register"
              :disabled="isRegistering"/>
    </base-card>
  </form>
</template>

<script>
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

export default {
  components: {
    InputText,
    Message
  },
  data() {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      },
      repeatedPassword: '',
      isPasswordEmptyOrTooShort: false,
      errorOccurred: false
    }
  },
  methods: {
    register() {
      this.errorOccurred = false;
      if (this.form.password.length < 6) {
        this.isPasswordEmptyOrTooShort = true;
        return;
      }
      this.isPasswordEmptyOrTooShort = false;
      this.$store.dispatch(
          'auth/register',
          this.form
      )
          .catch(() => {
            this.errorOccurred = true;
          })
          .then(() => {
            if (!this.errorOccurred)
              this.$router.replace('/');
          });
    }
  },
  computed: {
    isPasswordIdentical() {
      return this.form.password.localeCompare(this.repeatedPassword);
    },
    isRegistering() {
      return this.$store.getters['auth/getIsRegistering'];
    }
  }
};
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

.password {
  display: flex;
  flex-direction: column;
}
</style>