<template>
  <base-card class="auth-card">
    <b-form @submit.prevent="register" class="auth-form">
      <h3 class="auth-card-title">sign up now</h3>
      <b-alert :show="unexpectedErrorOccurred" variant="danger">
        <b-icon class="message-icon" icon="exclamation-triangle"></b-icon>
        There was an error while trying to register your account.
        Please try again later.
      </b-alert>
      <b-alert :show="emailAlreadyUsed" variant="warning">
        <b-icon class="message-icon" icon="info-circle"></b-icon>
        Email already in use.
      </b-alert>
      <b-alert :show="!isPasswordValid" variant="warning">
        <b-icon class="message-icon" icon="info-circle"></b-icon>
        Use different password. Required:
        <ul>
          <li>at least 6 characters</li>
          <li>at least one capital letter</li>
          <li>at least one number</li>
        </ul>
      </b-alert>
      <b-form-group label="e-mail">
        <b-form-input
            v-model="form.email"
            type="email"
            placeholder="example@example.com"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="first name">
        <b-form-input
            v-model="form.firstName"
            type="text"
            placeholder="Jane"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="last name">
        <b-form-input
            v-model="form.lastName"
            type="text"
            placeholder="Doe"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group label="password">
        <b-form-input
            v-model="form.password"
            type="password"
            placeholder="6 characters, one capital, one number"
            required
        ></b-form-input>
      </b-form-group>
      <b-form-group
          label="repeat password">
        <b-form-input
            v-model="repeatedPassword"
            type="password"
            :state="isPasswordIdentical"
            required
        ></b-form-input>
      </b-form-group>
      <b-button
          type="submit"
          :disabled="isRegistering"
          variant="primary"
          class="auth-button"
      >
        sign up
      </b-button>
    </b-form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        userRoles: ['Customer'],
      },
      repeatedPassword: '',
      unexpectedErrorOccurred: false,
      isPasswordValid: true,
      emailAlreadyUsed: false,
    }
  },
  methods: {
    register() {
      this.unexpectedErrorOccurred = false;
      this.isPasswordValid = true;
      this.emailAlreadyUsed = false;
      this.$store.dispatch(
          'auth/register',
          this.form
      )
          .then(() => {
            if (!this.unexpectedErrorOccurred)
              this.$router.replace('/');
          })
          .catch((error) => {
            console.log(error.response.status);
            if (error.response.status === 400) {
              if (error.response.data.errors !== undefined)
                this.isPasswordValid = false;
              if(error.response.data.message === "Failed : DuplicateUserName")
                this.emailAlreadyUsed = true;
            } else this.unexpectedErrorOccurred = true;
          });
    }
  },
  computed: {
    isPasswordIdentical() {
      if (this.form.password === '' && this.repeatedPassword === '') return null;
      return this.form.password.localeCompare(this.repeatedPassword) === 0;
    },
    isRegistering() {
      return this.$store.getters['auth/getIsRegistering'];
    }
  }
};
</script>

<style scoped>

.alert {
  padding: 1rem 1.5rem;
}

.message-icon {
  margin: 0 0.5rem;
}
</style>