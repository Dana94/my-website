<template>
  <Layout>
    <b-container>
      <h1>Portfolio</h1>
      <b-row class="odd-row">
        <div class="grid" tabindex="0" v-for="i in 3" :key="i.id">
          <div class="title">Project Title</div>
        </div>
      </b-row>
      <b-row class="even-row">
        <div class="grid" tabindex="0" v-for="i in 2" :key="i.id">
          <div class="title">Project Title</div>
        </div>
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
  height: 200px;
  width: 200px;
  transform: rotateZ(45deg);
  background-color: #00ffff;
  position: relative;
  margin: 0 44px;

  &:hover,
  &:focus {
    z-index: 1;
  }

  .title {
    transform: rotateZ(-45deg);
    position: absolute;
    top: 4rem;
    left: 18%;
    color: #0d2538 !important;
  }
}

.even-row {
  margin-top: -2rem;
}

@media screen and (max-width: 768px) {
  .even-row {
    margin-top: 0;
  }

  .grid {
    margin: 0 20px;
  }
}
</style>
