<template>
  <section>
    <the-header></the-header>
    <router-view></router-view>
  </section>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  beforeCreate() {
    this.$store.dispatch('auth/tryLogin');
  }
};
</script>

<style lang="scss">
$font-family-sans-serif: Helvetica;
$primary: rgb(143, 129, 90);

@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

.auth-card {
  max-width: 650px;
  margin: 4rem auto;
}

.auth-card-title {
  align-self: center;
  margin-bottom: 2rem;
}

.auth-form {
  display: flex;
  flex-direction: column;
}

.auth-button {
  align-self: flex-end;
  margin-top: 2rem;
}

</style>