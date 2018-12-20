<template>
  <div class="header">
    <h3 class="barber-title">{{ messagetitle }}</h3>
  </div>
</template>

<script>
import Vue from 'vue'
// Dependencies for Vue Form
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'

// Vue Form
Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})
Vue.use(Vuelidate)
Vue.use(VueSweetalert)

export default {
  name: 'Barber',
  data () {
    return {
      messagetitle: ' Add a Barber '
    }
  }
}
</script>

<style scoped>
  .barber-title {
    margin-top: 40px;
    text-align: center;
    font-size: 20pt;
    font-weight: 800;
    margin-bottom: 20px;
  }
</style>
