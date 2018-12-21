<template>
  <div id="app1" class="hero">
    <h3 class="barber-title">{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="upload">
            <!--Enter Barber Name -->
            <div class="form-group" :class="{ 'form-group--error': $v.barberName.$error }">
              <label class="form-control-label"> Barber Name </label>
              <input class="form__input" type="text" v-model.trim="barberName"/>
            </div>
            <div class="error" v-if="!$v.barberName.required"> (Barber Name Required*) </div>
            <!--Select Region from 32 County options-->
            <div class="form-group">
              <label class="form-label"> Select Region </label>
              <select id="region" name="Region" class="form-control" type="text" v-model="region">
                <option value="null" selected disabled hidden> Select Region </option>
                <option value="Antrim"> Antrim </option>
                <option value="Armagh"> Armagh </option>
                <option value="Carlow"> Carlow </option>
                <option value="Cavan"> Cavan </option>
                <option value="Clare"> Clare </option>
                <option value="Cork"> Cork </option>
                <option value="Derry"> Derry </option>
                <option value="Donegal"> Donegal </option>
                <option value="Down"> Down </option>
                <option value="Dublin"> Dublin </option>
                <option value="Fermanagh"> Fermanagh </option>
                <option value="Galway"> Galway </option>
                <option value="Kerry"> Kerry </option>
                <option value="Kildare"> Kildare </option>
                <option value="Kilkenny"> Kilkenny </option>
                <option value="Laois"> Laois </option>
                <option value="Leitrim"> Leitrim </option>
                <option value="Limerick"> Limerick </option>
                <option value="Longford"> Longford </option>
                <option value="Louth"> Louth </option>
                <option value="Mayo"> Mayo </option>
                <option value="Meath"> Meath </option>
                <option value="Monaghan"> Monaghan </option>
                <option value="Offaly"> Offaly </option>
                <option value="Roscommon"> Roscommon </option>
                <option value="Sligo"> Sligo </option>
                <option value="Tipperary"> Tipperary </option>
                <option value="Tyrone"> Tyrone </option>
                <option value="Waterford"> Waterford </option>
                <option value="Westmeath"> Westmeath </option>
                <option value="Wexford"> Wexford </option>
              </select>
            </div>
            <div class="error" v-if="!$v.region.required"> (Region Required*) </div>
            <!--Enter Bio-->
            <div class="form-group" :class="{ 'form-group--error': $v.barberBio.$error }">
              <label class="form-control-label"> Bio </label>
              <input class="form__input" type="text" v-model.trim="$v.barberBio.$model"/>
            </div>
            <div class="error" v-if="!$v.barberBio.required"> (Barber Bio Required*) </div>
            <div class="error" v-if="!$v.barberBio.maxLength"> Bio can only have {{$v.barberBio.$params.maxLength.max}} characters.</div>
            <!--Enter Tel-->
            <div class="form-group" :class="{ 'form-group--error': $v.tel.$error }">
              <label class="form__label" name="tel" type="text"> Contact Number  </label>
              <input class="form__input" v-model.trim="$v.tel.$model"/>
            </div>
            <div class="error" v-if="!$v.tel.required"> (Contact Number Required*) </div>
            <div class="error" v-if="!$v.tel.minLength"> Mobile Number must be {{$v.tel.$params.minLength.min}} characters.</div>
            <!--Create Button-->
            <p>
              <button class="btn btn-primary btn1" type="submit" :disabled="uploadStatus === 'PENDING'"> Create Profile </button>
            </p>
            <p class="typo__p" v-if="uploadStatus === 'OK'"> Profile Successfully Created! </p>
            <p class="typo__p" v-if="uploadStatus === 'ERROR'"> Please Fill in the Form Correctly. </p>
            <p class="typo__p" v-if="uploadStatus === 'PENDING'"> Creating Profile... </p>
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
import BarberService from '@/services/barberservice'
import { required, maxLength, minLength } from 'vuelidate/lib/validators'

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
      messagetitle: ' Add Barber Profile ',
      barberName: '',
      barberBio: '',
      tel: '',
      region: '',
      likes: 0,
      barber: {},
      uploadStatus: null
    }
  },
  validations: {
    barberName: {
      required
    },
    region: {
      required
    },
    barberBio: {
      required,
      maxLength: maxLength(60)
    },
    tel: {
      required,
      minLength: minLength(11)
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
          var barber = {
            barberName: this.barberName,
            barberBio: this.barberBio,
            tel: this.tel,
            region: this.region,
            likes: this.likes
          }
          this.barber = barber
          console.log('Creating Barber Profile: ' + JSON.stringify(this.barber, null, 5))
          this.postBarber(this.barber)
        }, 500)
      }
    },
    postBarber: function (barber) {
      console.log('uploadBarber!')
      console.log('Uploading in uploadBarber : ' + barber)
      BarberService.postBarber(barber)
        .then(response => {
          // JSON responses are automatically parsed.
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
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
    color: whitesmoke;
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
