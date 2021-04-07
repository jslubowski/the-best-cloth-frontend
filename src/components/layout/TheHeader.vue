<template>
  <div class="header-container">
    <div class="greeting-container">
      Welcome {{ userInfo.firstName }} {{ userInfo.lastName }}
    </div>
    <header>
      <nav>
        <div>
          <h1>
            <router-link to="/">The Best Cloth.</router-link>
          </h1>
          <ul class="categories-list">
            <li>
              <router-link to="/#">men</router-link>
            </li>
            <li>
              <router-link to="/#">women</router-link>
            </li>
            <li>
              <router-link to="/#">children</router-link>
            </li>
          </ul>
        </div>
        <ul v-if="!isLoggedIn" class="authorization-list">
          <li>
            <router-link to="/sign-up">sign up</router-link>
          </li>
          <li>
            <router-link to="/sign-in">sign in</router-link>
          </li>
        </ul>
        <ul v-else class="authorization-list">
          <li @click="logout">
            <router-link to="/logout">logout</router-link>
          </li>
          <li>
            <router-link to="#">
              my account
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isAuthenticated'];
    },
    userInfo() {
      return this.$store.getters['auth/getUserInfo'];
    }
  },
  methods: {
    logout() {
      this.$store.commit('auth/LOGOUT');
    }
  }
}
</script>

<style scoped>

header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

header a {
  text-decoration: none;
  display: inline-block;
  color: black;
}

header nav {
  width: 95%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 2px solid black;
}

header div {
  display: flex;
  align-items: flex-end;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

header li {
  padding: 0.75rem 1.5rem 0.3rem;
}

li:hover,
h1:hover {
  box-shadow: inset 0 -0.2rem 0 0 rgb(143, 129, 90);
  transition: 0.3s;
}

header h1 {
  margin: 0 4rem 0 0;
  font-size: 2.5rem;
}

.header-container {
  display: flex;
  flex-direction: column;
  margin: 2rem 0 1.5rem 0;
}

.greeting-container {
  width: 95%;
  display: flex;
  justify-content: flex-end;
  font-size: 0.9rem;
  margin: auto;
}
</style>