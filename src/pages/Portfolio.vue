<template>
  <Layout>
    <b-container>
      <h1>Portfolio</h1>
      <b-row>
        <div class="grid" tabindex="0"></div>
        <div class="grid" tabindex="0"></div>
        <div class="grid" tabindex="0"></div>
        <div class="grid" tabindex="0"></div>
        <div class="grid" tabindex="0"></div>
        <div class="grid" tabindex="0"></div>
      </b-row>
    </b-container>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  components: {
    Layout
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-bottom: 4rem; //TODO: Apply to all pages to keep consistent
}

.row {
  justify-content: center;
}
.grid {
  border: 1px dashed black;
  height: 200px;
  width: 200px;
  transform: rotateZ(45deg);
  background-color: #00ffffd1;

  &:hover,
  &:focus {
    z-index: 1;
  }
}
</style>
