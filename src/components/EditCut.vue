<template>
  <div id="app1" class="hero">
    <h3 class="cut-title">{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
          <cut-form :cut="cut" cutBtnTitle="Update Cut" @cut-is-created-updated="updateCut"></cut-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
  </div>
</template>

<script>
import CutService from '@/services/cutservice'
import CutForm from '@/components/CutForm'

export default {
  data () {
    return {
      cut: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update '
    }
  },
  components: {
    'cut-form': CutForm
  },
  created () {
    this.getCut()
  },
  methods: {
    getCut: function () {
      CutService.fetchCut(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.cut = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Cut in Edit: ' + JSON.stringify(this.cut, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateCut: function (cut) {
      console.log('Before PUT ' + JSON.stringify(cut, null, 5))
      CutService.putCut(this.$router.params, cut)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(cut, null, 5))
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
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .cut-title {
    margin-top: 40px;
    text-align: center;
    font-size: 30pt;
    font-weight: 800;
  }
</style>
