<template>
  <div class="container">
    <ul>
      <clothes-item
        v-for="item in clothesList"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :photoUrl="item.photoUrl"
        >{{ item.name }}</clothes-item
      >
    </ul>
  </div>
</template>

<script>
import ClothesItem from "../../components/clothes/ClothesItem.vue";

export default {
  components: { ClothesItem },
  computed: {
    clothesList() {
      return this.$store.getters["clothes/GET_CLOTHES"];
    },
  },
};
</script>

<style scoped>

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>