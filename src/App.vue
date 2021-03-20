<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import 'primevue/resources/themes/saga-blue/theme.css';       
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';  

export default {
  components: {
    TheHeader,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import "assets/css/primevue/paginator.css";

html {
  font-family: "Roboto", sans-serif;
}

.p-progress-spinner-circle {
  animation: p-progress-spinner-dash 1.5s ease-in-out infinite !important;
  stroke: rgb(114, 100, 61) !important;
}

.p-inputtext:enabled:hover,
.p-inputtext:enabled:focus {
  border-color: rgb(143, 129, 90);
  box-shadow: 0 0 0 0.15rem rgba(189, 179, 154, 0.3);
}

.p-button {
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(0, 0, 0, 0.8);
}

.p-button:enabled:hover {
  box-shadow: 0 0 0 0.5rem rgba(156, 144, 111, 0.3);
  background: rgba(0, 0, 0, 0.8);
  border-color: rgba(0, 0, 0, 0.8);
}

.p-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(156, 144, 111, 0.5);
}

</style>