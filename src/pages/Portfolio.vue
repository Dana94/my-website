<template>
  <Layout>
    <b-container>
      <h1>Portfolio</h1>
      <b-row>
        <b-col sm="4" class="grid"></b-col>
        <b-col sm="4" class="grid"></b-col>
        <b-col sm="4" class="grid"></b-col>
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
.grid {
  border: 1px dashed black;
  height: 200px;
}
</style>
