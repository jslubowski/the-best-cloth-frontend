<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">The Best Cloth.</router-link>
      </h1>
      <ul>
        <li><router-link to="/#">men</router-link></li>
        <li><router-link to="/#">women</router-link></li>
        <li><router-link to="/#">children</router-link></li>
      </ul>
    </nav>
  </header>
</template>

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
    border-bottom: 2px solid black;
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
    padding: 0.75rem 2rem 0.3rem;
    transition: 0.3s;
}

li:hover {
    box-shadow: inset 0 -0.2rem 0 0 rgb(143, 129, 90);
}

header h1 {
    margin: 0 5rem 0.75rem 0;
    font-size: 2.5rem;
}
</style>