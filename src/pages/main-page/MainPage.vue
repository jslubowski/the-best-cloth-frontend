<template>
  <div>
    <div class="loading-spinner" v-if="!dataReady">
      <b-spinner variant="primary"/>
    </div>
    <div class="items-container">
      <b-pagination
          v-model="currentPage"
          :per-page="paginationData.itemsPerPage"
          :total-rows="paginationData.totalItems"
          @change="onPageChange">
      </b-pagination>
      <div class="loading-spinner" v-if="listLoading">
        <b-spinner variant="primary" class="loading-spinner"/>
      </div>
      <ul>
        <clothes-item
            v-for="item in clothesList"
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :price="item.price"
            :photoUrl="item.photos[0].photoUrl"
        >{{ item.name }}
        </clothes-item>
      </ul>
    </div>
  </div>
</template>

<script>
import ClothesItem from "../../components/clothes/ClothesItem.vue";

export default {
  components: {
    ClothesItem,
  },
  data() {
    return {
      listLoading: true,
      currentPage: 1,
    };
  },
  computed: {
    clothesList() {
      return this.$store.getters["clothes/GET_CLOTHES"];
    },
    paginationData() {
      const paginationData = this.$store.getters["clothes/GET_PAGINATION_DATA"];
      if (paginationData === null)
        return {
          itemsPerPage: 15,
          totalItems: 0,
        }
      return paginationData;
    },
    dataReady() {
      return this.$store.getters["clothes/IS_DATA_READY"];
    },
  },
  methods: {
    async loadAllShoppingItems(paginationParams) {
      try {
        await this.$store.dispatch(
            "clothes/loadAllShoppingItems",
            paginationParams
        );
      } catch (error) {
        console.log(error);
      }
    },
    async onPageChange(event) {
      this.listLoading = true;
      const paginationParams = {
        pageNumber: event,
        pageSize: this.paginationData.itemsPerPage,
      };
      await this.loadAllShoppingItems(paginationParams);
      this.listLoading = false;
    },
  },
  created() {
    const paginationParams = {
      pageNumber: 1,
      pageSize: 15,
    };
    this.loadAllShoppingItems(paginationParams);
    this.listLoading = false;
  },
};
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
}

.items-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card {
  margin: 1rem 2rem;
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

.pagination {
  align-self: center;
  margin: 1.5rem;
}
</style>
