<template>
  <div class="header">
    <h3 class="spruced-title">{{messagetitle}}</h3>
  </div>
</template>

<script>
import CutService from '@/services/cutservice'
export default {
  name: 'Cuts',
  data () {
    return {
      messagetitle: ' Cuts Showcase ',
      cuts: [],
      errors: []
    }
  },
  // Fetches Cuts when the component is created.
  created () {
    this.loadCuts()
  },
  methods: {
    loadCuts: function () {
      CutService.fetchCuts()
        .then(response => {
          // JSON responses are automatically parsed.
          this.cuts = response.data
          console.log(this.cuts)
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
  .spruced-title {
    margin-top: 30px;
    text-align: center;
    font-size: 30pt;
    margin-bottom: 10px;
  }
</style>
