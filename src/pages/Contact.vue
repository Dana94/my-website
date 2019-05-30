<template>
  <Layout>
    <h1>Get In Touch!</h1>

    <b-form @submit="onSubmit">
      <b-form-group id="input-group-1" label="Email:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" aria-required="true"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" aria-required="true"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Message:" label-for="input-3">
        <b-form-textarea id="textarea" v-model="text" rows="3" max-rows="6" aria-required="true"></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
  </Layout>
</template>

<script>
import Layout from "~/layouts/Default.vue";

export default {
  data() {
    return {
      form: {
        email: "",
        name: ""
      },
      text: ""
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    }
  },
  components: {
    Layout
  }
};
</script>
