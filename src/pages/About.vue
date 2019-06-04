<template>
  <Layout>
    <b-container>
      <h1>About Me</h1>
      <b-row>
        <font-awesome :icon="['fab', 'html5']" class="fa-6x icon html5"/>
        <font-awesome :icon="['fab', 'css3']" class="fa-6x icon css3"/>
        <font-awesome :icon="['fab', 'js']" class="fa-6x icon js"/>
        <font-awesome :icon="['fab', 'vuejs']" class="fa-6x icon vuejs"/>
        <font-awesome :icon="['fab', 'bootstrap']" class="fa-6x icon bootstrap"/>
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
.row {
  justify-content: center;
  .icon {
    margin: 0 1rem;
  }
  .html5 {
    color: orangered;
  }
  .css3 {

  }
  .js {
    color: #f5dd1b;
  }
  .bootstrap {
    color: #563d7c;
  }
  .vuejs {

  }
}
</style>
