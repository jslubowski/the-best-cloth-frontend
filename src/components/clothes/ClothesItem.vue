<template>
  <base-card>
    <li>
      <img :src="photoUrl" />
      <div class="details-container">
        <span>{{ name }}</span>
        <span>{{ priceInEuro }}</span>
      </div>
    </li>
  </base-card>
</template>

<script>
export default {
  props: ["id", "name", "price", "photoUrl"],
  computed: {
    priceInEuro() {
      return this.price / 100 + "€";
    },
  },
};
</script>

<style scoped>
li {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.details-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}

img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

.card {
  width: 18rem;
  height: 22rem;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 2px 20px rgb(143, 129, 90);
  transition: box-shadow 0.2s ease-out;
}
</style>