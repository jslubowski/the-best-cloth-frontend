<template>
  <div>
    <ProgressSpinner v-if="!dataReady"/>
    <div class="container" v-else>
      <Paginator
        :rows="rowsPerPageOptions[0]"
        :totalRecords="paginationData.totalItems"
        :rowsPerPageOptions="rowsPerPageOptions"
        @page="onPageChange"
      >
      </Paginator>
      <ProgressSpinner v-if="listLoading"/>
      <ul v-else>
        <clothes-item
          v-for="item in clothesList"
          :key="item.id"
          :id="item.id"
          :name="item.name"
          :price="item.price"
          :photoUrl="item.photos[0].photoUrl"
          >{{ item.name }}</clothes-item
        >
      </ul>
    </div>
  </div>
</template>

<script>
import Constants from "./constants.js";
import ClothesItem from "../../components/clothes/ClothesItem.vue";

export default {
  components: {
    ClothesItem,
  },
  data() {
    return {
      rowsPerPageOptions: [15, 30, 45],
      listLoading: true,
    };
  },
  computed: {
    clothesList() {
      return this.$store.getters["clothes/GET_CLOTHES"];
    },
    paginationData() {
      return this.$store.getters["clothes/GET_PAGINATION_DATA"];
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
        pageNumber: event.page + Constants.PAGE_INCREMENT,
        pageSize: event.rows,
      };
      await this.loadAllShoppingItems(paginationParams);
      this.listLoading = false;
    },
  },
  created() {
    const paginationParams = {
      pageNumber: 1,
      pageSize: this.rowsPerPageOptions[0],
    };
    this.loadAllShoppingItems(paginationParams);
    this.listLoading = false;
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

.p-progress-spinner {
  /* really tried to do not use !important but primevue has specific
  override style options i couldn't deal with */
  display: flex !important; 
  z-index: 100;
  margin: 10rem auto !important;
  width: 150px !important;
  height: 150px !important;
}
</style>
