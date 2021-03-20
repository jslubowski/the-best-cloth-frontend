<template>
  <header>
    <nav>
      <div>
      <h1>
        <router-link to="/">The Best Cloth.</router-link>
      </h1>
      <ul class="categories-list">
        <li><router-link to="/#">men</router-link></li>
        <li><router-link to="/#">women</router-link></li>
        <li><router-link to="/#">children</router-link></li>
      </ul>
      </div>
      <ul class="authorization-list">
        <li><router-link to="/sign-up">sign up</router-link></li>
        <li><router-link to="/sign-in">sign in</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    userInfo() {
      return this.$store.getters['auth/getUserInfo'];
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
  margin: 2rem 0 1.5rem 0;
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
</style>