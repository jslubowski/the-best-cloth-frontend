<template>
  <base-card class="item-card">
      <router-link :to="itemLink">
        <img :src="photoUrl"/>
        <div class="details-container">
          <div class="item-name">{{ name }}</div>
          <div class="item-price">{{ priceInEuro }}</div>
        </div>
      </router-link>
  </base-card>
</template>

<script>
export default {
  props: ["id", "name", "price", "photoUrl"],
  computed: {
    priceInEuro() {
      return this.price / 100 + "€";
    },
    itemLink() {
      return `/item/${this.id}`;
    }
  },
};
</script>

<style scoped>
item-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.details-container {
  display: flex;
  flex-direction: column;
  color: black;
}

.item-name {
  font-weight: bolder;
  font-size: 0.9rem;
}

.item-price {
  font-size: 0.8rem;
}

img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 12px;
}

.card {
  width: 15rem;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 2px 20px rgb(143, 129, 90);
  transition: box-shadow 0.2s ease-out;
}
</style>