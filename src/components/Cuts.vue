<template>
  <div class="header">
    <h3 class="cuts-title">{{ messagetitle }}</h3>
    <img src="../assets/barbershop.png" alt="description here" />
    <div id="app1">
      <v-client-table :columns="columns" :data="cuts" :options="options">
      </v-client-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import CutService from '@/services/cutservice'

// Vue Table
Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Cuts',
  data () {
    return {
      messagetitle: ' Cuts Showcase ',
      cuts: [],
      errors: [],
      columns: ['_id', 'cutType', 'cutPrice', 'cutDate', 'barberName', 'likes'],
      options: {
        headings: {
          _id: 'ID',
          cutType: 'Haircut',
          cutPrice: 'Amount',
          cutDate: 'Date',
          barberName: 'Barber',
          likes: 'Likes'
        }
      }
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
  .cuts-title {
    margin-top: 40px;
    text-align: center;
    font-size: 20pt;
    font-weight: 800;
    margin-bottom: 20px;
  }
</style>
