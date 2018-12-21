<template>
  <div id="app1" class="hero">
    <h3 class="cut-title">{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <cut-form :cut="cut" cutBtnTitle="Add Cut" @cut-is-created-updated="postCut"></cut-form>
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
      cut: {cutType: '', cutPrice: '', cutDate: '', barberName: ''}
      // messagetitle: ' Add Cut Details '
    }
  },
  components: {
    'cut-form': CutForm
  },
  methods: {
    postCut: function (cut) {
      console.log('uploadCut!')
      console.log('Uploading in uploadCut : ' + cut)
      CutService.postCut(cut)
        .then(response => {
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
  .cut-title {
    margin-top: 40px;
    text-align: center;
    font-size: 20pt;
    font-weight: 800;
    margin-bottom: 20px;
  }
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
</style>
