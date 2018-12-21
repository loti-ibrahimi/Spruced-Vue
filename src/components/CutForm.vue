<template>
  <div id="app1" class="hero">
    <h3 class="cut-title">{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="upload">
            <!--Enter Cut Type -->
            <div class="form-group" :class="{ 'form-group--error': $v.cutType.$error }">
              <label class="form-control-label" name="CutType"> Cut Type </label>
              <input class="form__input" type="text" v-model.trim="cutType"/>
            </div>
            <div class="error" v-if="!$v.cutType.required"> (Cut Description Required*) </div>
            <!--Select Cut Price from 3 options-->
            <div class="form-group">
              <label class="form-label"> Select Cut Price </label>
              <select id="cutPrice" name="cutPrice" class="form-control" type="text" v-model="cutPrice">
                <option value="null" selected disabled hidden> Select Cut Price </option>
                <option value="5"> €5 </option>
                <option value="10"> €10 </option>
                <option value="15"> €15 </option>
              </select>
            </div>
            <div class="error" v-if="!$v.cutPrice.required"> (Cut Price Required*) </div>
            <!--Enter Barber Name-->
            <div class="form-group" :class="{ 'form-group--error': $v.barberName.$error }">
              <label class="form-control-label" name="barberName" type="text"> Barber Name </label>
              <input class="form__input" v-model.trim="$v.barberName.$model"/>
            </div>
            <div class="error" v-if="!$v.barberName.required"> (Barber Name Required*) </div>
            <!--Enter Date of Cut (In the format shown)-->
            <div class="form-group" :class="{ 'form-group--error': $v.cutDate.$error }">
              <label class="form__label" name="cutDate" type="text"> Date of Cut (dd.mm.yyyy) </label>
              <input class="form__input" v-model.trim="$v.cutDate.$model"/>
            </div>
            <div class="error" v-if="!$v.cutDate.required"> (Date Required*) </div>
            <!--Upload Button-->
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="uploadStatus === 'PENDING'"> Submit </button>
            </p>
            <p class="typo__p" v-if="uploadStatus === 'OK'"> Uploaded Successfully! </p>
            <p class="typo__p" v-if="uploadStatus === 'ERROR'"> Please Fill in the Form Correctly.</p>
            <p class="typo__p" v-if="uploadStatus === 'PENDING'"> Uploading... </p>
          </form>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import Vue from 'vue'
// Dependencies for Vue Form
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import VueSweetalert from 'vue-sweetalert'
import { required } from 'vuelidate/lib/validators'

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
  name: 'FormData',
  props: ['cutBtnTitle'],
  data () {
    return {
      messagetitle: ' Cut Details ',
      cutType: '',
      cutPrice: '',
      cutDate: '',
      barberName: '',
      likes: 0,
      uploadStatus: null
    }
  },
  validations: {
    cutType: {
      required
    },
    barberName: {
      required
    },
    cutDate: {
      required
    },
    cutPrice: {
      required
    }
  },
  methods: {
    upload () {
      console.log('upload!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.uploadStatus = 'ERROR'
      } else {
        this.uploadStatus = 'PENDING'
        setTimeout(() => {
          this.uploadStatus = 'OK'
          var cut = {
            cutType: this.cutType,
            cutPrice: this.cutPrice,
            cutDate: this.cutDate,
            barberName: this.barberName,
            likes: this.likes
          }
          this.cut = cut
          console.log('Uploading in CutForm: ' + JSON.stringify(this.cut, null, 5))
          this.$emit('cut-is-created-updated', this.cut)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  .cut-title {
    margin-top: 40px;
    text-align: center;
    font-size: 30pt;
    font-weight: 800;
    margin-bottom: 20px;
    color: khaki;
  }
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .upload-form .form-control-label.text-left{
    text-align: left;
  }
  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }
  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }
  .dirty {
    border-color: #5A5;
    background: #EFE;
  }
  .dirty:focus {
    outline-color: #8E8;
  }
  .error {
    border-color: red;
    background: #000000;
    color: white;
  }
  .error:focus {
    outline-color: #ffa519;
  }
  .form-control-label{
    color: khaki;
  }
  .form-label {
    color: khaki;
  }
  .form-group {
    color: khaki;
  }
</style>
