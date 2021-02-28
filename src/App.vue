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
</style>