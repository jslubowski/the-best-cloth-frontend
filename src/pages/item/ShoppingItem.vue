<template>
  <div class="loading-spinner" v-if="shoppingItem === undefined">
    <b-spinner variant="primary"/>
  </div>
  <base-card class="item-details-card" v-else>
    <item-gallery
        :shopping-item="shoppingItem"/>
    <div class="item-details">
      <h3>{{ shoppingItem.name }}</h3>
      <p>price: {{ shoppingItem.price / 100 }}€</p>
      <b-form-group label="size">
        <b-form-radio-group
            v-model="selectedSize"
            :options="sizes"
            button-variant="outline-secondary"
            buttons
        ></b-form-radio-group>
      </b-form-group>
    </div>
  </base-card>
</template>

<script>
import ItemGallery from "./ItemGallery";

export default {
  components: {ItemGallery},
  data() {
    return {
      shoppingItem: undefined,
      sizes: [
        { text: 'XS', value: 'xs' },
        { text: 'S', value: 's' },
        { text: 'M', value: 'm' },
        { text: 'L', value: 'l' },
        { text: 'XL', value: 'xl' },
        { text: 'XXL', value: 'xxl' },
      ],
      selectedSize: '',
    }
  },
  async created() {
    this.shoppingItem =
        await this.$store.dispatch(
            'clothes/getSingleShoppingItem',
            this.$route.params.itemId
        );
  },
}
</script>

<style scoped lang="scss">
@import '../../assets/variables.scss';

.item-details-card {
  max-width: 900px;
  margin: 3rem auto;
  display: flex;
  flex-direction: row;
}

.loading-spinner {
  display: flex;
  justify-content: center;
  height: 50vw;
  align-items: center;

  > span {
    $size: 5rem;
    width: $size;
    height: $size;
  }
}

div .item-gallery {
  max-width: 400px;
  border-radius: 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
}

.item-details {
  margin-left: 2rem;
}

</style>

