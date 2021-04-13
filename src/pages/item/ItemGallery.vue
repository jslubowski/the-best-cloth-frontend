<template>
  <div class="item-gallery">
    <div class="icon-nav-container" @click="previousPhoto">
      <b-icon
          icon="chevron-left"
          font-scale="2"
          variant="primary"
      ></b-icon>
    </div>
    <b-carousel ref="photoCarousel" :interval="10000" fade>
      <b-carousel-slide
          v-for="photo in shoppingItem.photos"
          :key="photo.id"
          :img-src="photo.photoUrl"
      >
      </b-carousel-slide>
    </b-carousel>
    <div class="icon-nav-container" @click="nextPhoto">
      <b-icon
          icon="chevron-right"
          font-scale="2"
          variant="primary"
      ></b-icon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'item-gallery',
  props: {
    shoppingItem: {}
  },
  methods: {
    nextPhoto() {
      this.$refs.photoCarousel.next();
    },
    previousPhoto() {
      this.$refs.photoCarousel.prev();
    }
  }
}
</script>
<style scoped lang="scss">
@import '../../assets/variables.scss';

.icon-nav-container {
  display: flex;

  > * {
    align-self: center;
  }
}

.icon-nav-container:hover {
  cursor: pointer;

  > * {
    box-shadow: inset 0 -1px 0 0 rgb(143, 129, 90);
    transition: 0.3s;
  }
}

</style>